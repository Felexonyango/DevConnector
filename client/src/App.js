import React, { Fragment, useEffect } from "react";
import { SET_LOADING} from "./actions/types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Landing from "./components/layout/Landing";
import Routes from "./components/routing/Routes";
import './components/layout/Navba.css'
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import "./App.css";
import Footer from "./components/layout/Footer";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    } else {
      store.dispatch({
        type: SET_LOADING
      });
    }
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} /> 
          </Switch>
          <Footer/>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;

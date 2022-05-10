import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile-forms/CreateProfile";
import EditProfile from "../profile-forms/EditProfile";
import AddExperience from "../profile-forms/AddExperience";
import AddEducation from "../profile-forms/AddEducation";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import Job from "../job/JobForm";
import Jobs from '../job/Jobs'
import Mpesa from "../payments/Mpesa";
import NotFound from "../layout/NotFound";
import Subscription from "../payments/Subscription";
import PrivateRoute from "../routing/PrivateRoute";
import Pay from "../payments/Pay";
import Forgetpassword from "../auth/Forgetpassword"
import Resetpassword from "../auth/Resetpassword";
import Terms from "../layout/Terms";
import Privacy from "../layout/Privacy";
import Findjob from "../job/FindJob";
import Meeting from "../meet/Meeting";
import GetMeting from "../meet/GetMeting";
import AboutUs from "../layout/AboutUs";
import HowItWorks from "../layout/HowItWorks";
import Blog from "../layout/Blog";
import Agreement from "../layout/Agreement"
import ContactUs from "../layout/ContactUs";
import Room from '../chat/components/Room';
import Home from "../chat/components/Home"
const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path='/contact'component={ContactUs}/>
        <Route exact path='/blog'component={Blog}/>
       <Route exact path='/how-it-works'component={HowItWorks}/>
       <Route exact path='/about'component={AboutUs}/>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/add-experience' component={AddExperience} />
        <PrivateRoute exact path='/add-education' component={AddEducation} />
        <PrivateRoute exact path='/posts' component={Posts} />
        <PrivateRoute exact path='/posts/:id' component={Post} />
      <PrivateRoute exact path="/subscriptions"component={Subscription}/>
        <PrivateRoute exact path="/choose"component={Mpesa}/>
        <Route  exact path="/paypal"component={Pay}/>
        <PrivateRoute exact path="/job"component={Jobs}/>
        <PrivateRoute exact path="/jobs"component={Job}/>
        <Route exact path ="/password"component={Forgetpassword}/>
        <Route exact path ="/resetpassword/:token"component={Resetpassword}/>
        <Route exact path='/terms'component={Terms}/>
        <Route exact path="/policy"component={Privacy}/>
        <Route exact path ="/find/:id"component={Findjob}/>
      <Route exact path='/agreement'component={Agreement}/>
      <PrivateRoute exact path="/events"component={Meeting}/>  
         <Route exact path ="/get-events"component={GetMeting}/>
         <PrivateRoute exact path ="/video-meeting"component={Home}/>
         <PrivateRoute exact path='/:roomId'component={Room}/>
        <Route component={NotFound}/>
      </Switch>
    </section>
  );
};

export default Routes;

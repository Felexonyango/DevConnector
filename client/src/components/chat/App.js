import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Room from './components/Room';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:roomId' element={<Room />} />
        </Routes> 
      </BrowserRouter>
      {/* <Roomtest /> */}
    </div>
  );
}

export default App;

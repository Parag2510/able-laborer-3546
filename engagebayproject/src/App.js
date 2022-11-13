//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import VideoBackGround from './Components/HomeComponents/VideoBackGround';
import AvtivitySoution from './Components/HomeComponents/AvtivitySolution';
 import CreateOwnViews from './Components/HomeComponents/CreateOwnViews';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <VideoBackGround/>
       <AvtivitySoution/>
       <CreateOwnViews/>
    </div>
  );
}

export default App;

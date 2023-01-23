import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/AnimalDetail/AnimalDetail.jsx';
import { Home } from './components/Home/Home.jsx';
import { Navigation } from "./components/routes/Navigation"
import axios from "axios"

// axios.defaults.baseURL = "http://localhost:3001/api/v1" 
axios.defaults.baseURL = "https://craven-sign-production.up.railway.app/"

function App() {
  return (
    // <Route path="/" element={<Dashboard />}>
    <Navigation/>
    // <BrowserRouter>
    // <Routes>
    // <Route exact path = '/detail/:id' element={<Detail/>}/>
    //   <Route exact path = '/home' element={<Home/>}/>
    //   <Route exact path = '/' element = {<LandingPage/>}/>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;

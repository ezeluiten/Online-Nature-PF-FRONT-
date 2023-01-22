
import { Route, Routes } from 'react-router-dom';
import  NavBar  from './components/NavBar/NavBar';
import { LandingPage } from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/detail';
import Home from './components/Home/Home.jsx';



function App() {
  return (
    <Routes>
    <Route default path= '/' element = {<LandingPage/>}/>
    <Route path = '/id' element = {<Detail/>}/>
    <Route path = '/home' element = {<Home/>}/>
    </Routes>
  );
}

export default App;

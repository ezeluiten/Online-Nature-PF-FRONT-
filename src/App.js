import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/detail.jsx';
import { Home } from './components/Home/Home.jsx';
import Register from './components/Register/Register.jsx'

function App() {
  return (
    // <Route path="/" element={<Dashboard />}>
    <BrowserRouter>
    <Routes>
    <Route exact path = '/detail/:id' element={<Detail/>}/>
      <Route exact path = '/home' element={<Home/>}/>
      <Route exact path = '/' element = {<LandingPage/>}/>
      <Route exact path = '/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/AnimalDetail/AnimalDetail.jsx';
import { Home } from './components/Home/Home.jsx';

function App() {
  return (
    // <Route path="/" element={<Dashboard />}>
    <BrowserRouter>
      <Routes>
        <Route path = '/detail/:id' element={<Detail/>}/>
        <Route path = '/home' element={<Home/>}/>
        <Route default path = '/' element = {<LandingPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

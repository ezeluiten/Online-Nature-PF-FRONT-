import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/AnimalDetail/AnimalDetail.jsx';
import { Home } from './components/Home/Home.jsx';
import { Navigation } from "./components/routes/Navigation"
import axios from "axios"
import { ModalCashierPortal } from "./components/Cashier/ModalCashier"
import { HandleClose } from '../src/components/helpers/cashierModalHelper.js';
import { useDispatch, useSelector } from "react-redux"
import { setOpenModal } from "./store/actions"



const developUrl = process.env.REACT_APP_DEVELOPMENT_URL
const prodUrl = process.env.REACT_APP_PRODUCTION_URL
axios.defaults.baseURL = developUrl
// axios.defaults.baseURL = prodUrl

function App() {

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  
  const modifyModalState =(isOpen)=>{
      console.log("🚀 ~ file: cashierModalHelper.js:8 ~ HandleClose ~ isOpen", isOpen)
    dispatch(setOpenModal(isOpen))
    
  }
  return (
    <>
      <ModalCashierPortal onClose={modifyModalState}>
        {/* {componente - children} */}
      </ModalCashierPortal>
      <Navigation/>
    </>
  );
}

export default App;

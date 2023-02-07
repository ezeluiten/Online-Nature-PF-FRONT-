import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
import Detail  from './components/detail/AnimalDetail/AnimalDetail.jsx';
import { Home } from './components/Home/Home.jsx';
import { Navigation } from "./components/routes/Navigation"
import axios from "axios"
import { ModalCashierPortal } from "./components/Cashier/ModalCashier/ModalCashier"
import { HandleClose } from '../src/components/helpers/cashierModalHelper.js';
import { useDispatch, useSelector } from "react-redux"
import { getCatalogue, getUserLoggedInfoToPay, setOpenModal } from "./store/actions"
import { CardShoppingCart } from './components/Cashier/ShoppingCart/CardShoppingCart.js';
import { useEffect } from 'react';
import { scriptsMeliInjection } from './components/helpers/mercadopagoInitHelper.js';
import Login from './components/Login/Login.jsx';
import { useAuth0 } from '@auth0/auth0-react';


const developUrl = process.env.REACT_APP_DEVELOPMENT_URL
const prodUrl = process.env.REACT_APP_PRODUCTION_URL

axios.defaults.baseURL = process.env.NODE_ENV === "production" ? prodUrl : developUrl 
console.log("🚀 ~ file: App.js:23 ~ axios.defaults.baseURL", axios.defaults.baseURL)

function App() {

  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const {user, isAuthenticated} = useAuth0()

  useEffect(() => {
    
    dispatch(getCatalogue());
  }, []);
  useEffect(() => {
    
    dispatch(getUserLoggedInfoToPay({...user, isAuthenticated}))
  }, [isAuthenticated]);
  
  const modifyModalState =(isOpen)=>{
    dispatch(setOpenModal(isOpen))
    
  }
  return (
    <>
      <ModalCashierPortal onClose={modifyModalState}>
        {/* {componente - children} */}
      </ModalCashierPortal>
      <Navigation/>
      <Login/>
    </>
  );
}

export default App;

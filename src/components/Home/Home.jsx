import React, { useEffect } from "react";
import { createPortal } from 'react-dom';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CardsHome from "../CardsHome/CardsHome";
import styles from '../Home/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoggedInfoToPay, setOpenModal } from "../../store/actions"
import { useAuth0 } from "@auth0/auth0-react";
import { LoaderContainer } from "./loaderStyles"
import { ThreeDots } from "react-loader-spinner";


import { LoaderContainer } from "./loaderStyles"
import { ThreeDots } from "react-loader-spinner";
import { setSettingsModalGate } from "../../store/actions/index";


const img = require("../../imagenes/header-home.jpg");
export const Home = () => {

  const dispatch = useDispatch()
  const { isAuthenticated, user, logout } = useAuth0();
    const { payer, isOpenSettingsModal } = useSelector((state) => state);
    const openSettingsModal = () => {
      dispatch(setSettingsModalGate(isOpenSettingsModal));
    };
  
  useEffect(() => {
    dispatch(getUserLoggedInfoToPay({...user, isAuthenticated}))
  }, [isAuthenticated])
  }, [isAuthenticated])
  
  const loading = useSelector((state) => state.loading);
  const loading = useSelector((state) => state.loading);
  const isModalOpen = useSelector((state) => state.isModalOpen);
  
  if(loading){
    //componente loader
    <LoaderContainer>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
   />

    </LoaderContainer>
  }

  if(!loading){
    
    return (
      <div
        className={styles.body}
        onClick={isOpenSettingsModal ? () => openSettingsModal() : null}
      >
        <NavBar />
        <Header
          imagen={img}
          text="
  We have suffered an alarming loss of biodiversity in recent decades...
  "
        />
        <CardsHome />
      </div>
    );
  }
  if(loading){
    //componente loader
    <LoaderContainer>
      <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#4fa94d" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
   />

    </LoaderContainer>
  }

  if(!loading){
    
    return (
      <div className={styles.body}>
        <NavBar />
        <Header
          imagen={img}
          text="
  We have suffered an alarming loss of biodiversity in recent decades...
  "
        />
        <CardsHome />
        
      </div>
    );
  }
};



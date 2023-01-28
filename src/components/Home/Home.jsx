import React, { useEffect } from "react";
import { createPortal } from 'react-dom';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CardsHome from "../CardsHome/CardsHome";
import { Campaing } from "../Campaing/Campaing";
import styles from '../Home/Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLoggedInfoToPay, setOpenModal } from "../../store/actions"
import { useAuth0 } from "@auth0/auth0-react";

const img = require("../../imagenes/header-home.jpg");
export const Home = () => {

  const dispatch = useDispatch()
  const { isAuthenticated, user, logout } = useAuth0();
  
  console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ user", user)
  useEffect(() => {
    dispatch(getUserLoggedInfoToPay({...user, isAuthenticated}))
  }, [])
  
  const isModalOpen = useSelector((state) => state.isModalOpen);
  console.log("🚀 ~ file: Home.jsx:14 ~ Home ~ isModalOpen", isModalOpen)
  

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
      {/* <Campaing/> */}
      
    </div>
  );
};



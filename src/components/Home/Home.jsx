import React from "react";
import { createPortal } from 'react-dom';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CardsHome from "../CardsHome/CardsHome";
import { Campaing } from "../Campaing/Campaing";

import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from "../../store/actions"



const img = require("../../imagenes/header-home.jpg");
export const Home = () => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  console.log("🚀 ~ file: Home.jsx:14 ~ Home ~ isModalOpen", isModalOpen)
  const dispatch = useDispatch()
  

  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="
We have suffered an alarming loss of biodiversity in recent decades...
"
      />
      <CardsHome />
      {/* <Campaing/> */}
      
    </>
  );
};



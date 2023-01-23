import React from "react";
import { createPortal } from 'react-dom';
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CardsHome from "../CardsHome/CardsHome";
import { Campaing } from "../Campaing/Campaing";
import { ModalCashierPortal } from "../Cashier/ModalCashier"
import { useDispatch, useSelector } from 'react-redux'
import { setOpenModal } from "../../store/actions"

const img = require("../../imagenes/header-home.jpg");
export const Home = () => {
  const isModalOpen = useSelector((state) => state.isModalOpen);
  console.log("🚀 ~ file: Home.jsx:14 ~ Home ~ isModalOpen", isModalOpen)
  const dispatch = useDispatch()
  const handleClose = ()=>{
    dispatch(setOpenModal(isModalOpen))
  }

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
      <Campaing/>
      <ModalCashierPortal onClose={handleClose}/>
    </>
  );
};



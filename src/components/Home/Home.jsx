import React from "react";
// import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import CardsHome from "../CardsHome/CardsHome";
const img = require("../../imagenes/header-home.jpg");

export const Home = (props) => {
  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="We have suffered an alarming loss of biodiversity in recent
            decades..."
      />

      <div></div>
      <CardsHome />
    </>
  );
};

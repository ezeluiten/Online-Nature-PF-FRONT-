import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import NavBar from "../../NavBar/NavBar";
import styles from "./AnimalDetail.module.css";

export default function AnimalDetil() {
  let detalle = useSelector((state) => state.animalDetail);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/campaign`);
  };

  const handleAdd = () => {};

  return (
    <div className={styles.detalle}>
      <NavBar />
      <img src={detalle.image_detail} alt="img" />
      <div className={styles.container}>
        <h1>{detalle.title}</h1>
        <button className={styles.button} onClick={() => handleClick()}>
          Volver
        </button>
        <h3>{detalle.description}</h3>
        <button className={styles.buttonAdd} onClick={() => handleAdd()}>
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
}

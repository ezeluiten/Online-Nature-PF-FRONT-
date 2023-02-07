import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import styles from "./AnimalDetail.module.css";
import { setDonationCartElements, resetDetail } from "../../../store/actions";

export default function AnimalDetil() {
  const dispatch = useDispatch();
  let detalle = useSelector((state) => state.detail);
  console.log(detalle);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(resetDetail());
    navigate(`/campaign`);
  };

  return (
    <div className={styles.detalle}>
      <NavBar />
      <img src={detalle.image_detail} alt="img" />
      <div className={styles.container}>
        <div className={styles.botonera}>
          <button className={styles.button} onClick={() => handleClick()}>
            Back
          </button>
        </div>
        <h1>{detalle.title}</h1>
        <h3>{detalle.description}</h3>
        <button
          className={styles.buttonAdd}
          onClick={() => {
            dispatch(setDonationCartElements(detalle));
          }}
        >
          Add cart
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  orderByAlpha,
  getCatalogue,
  orderBySpecies,
} from "../../store/actions";
import styles from '../filters/filters.module.css'
const Filters = ({setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();
// const hola = useSelector((state) => state.donationCatalogue);

 
  useEffect(() => {
    dispatch(getCatalogue());
  }, [dispatch]);

  const handleFilteralph = (e) => {
    e.preventDefault();
    dispatch(orderByAlpha(e.target.value));
    setCurrentPage(1)
    setOrder(e.target.value);
   
  };
const handleFilterSpecies = (e) => {
  e.preventDefault();
  dispatch(orderBySpecies(e.target.value));
  setCurrentPage(1);
  setOrder(e.target.value);
};
  return (
    <div className={styles.divi}>
      <div className={styles.divis}>
        <select onChange={handleFilteralph} className={styles.select}>
          <option value="all" className={styles.order}>
            Order Alphabetically
          </option>
          <option value="ascendant" className={styles.order}>
            A - Z
          </option>
          <option value="descendant" className={styles.order}>
            Z - A
          </option>
        </select>
      </div>
      <div className={styles.divis}>
        <select onChange={handleFilterSpecies} className={styles.select}>
          <option value="all" className={styles.order}>
            Filter by
          </option>
          <option value="all" className={styles.order}>
            All
          </option>
          <option value="animals" className={styles.order}>
            animals
          </option>
          <option value="trees" className={styles.order}>
            trees
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

import React, { useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  orderByAlpha,
  getCatalogue,
  orderBySpecies,

  filterType,
  ordenNameMayor,
  ordenNameMenor
} from "../../store/actions";
import styles from '../filters/filters.module.css'
const Filters = ({setCurrentPage, setOrder}) => {
  const dispatch = useDispatch();
const hola = useSelector((state) => state.donationCatalogue);

 
  useEffect(() => {
    dispatch(getCatalogue());
    console.log(hola)
  }, [dispatch]);

  const handleFilterAlph = (e) => {
    e.preventDefault();
    // dispatch(orderByAlpha(e.target.value));
    const type = e.target.value
    if(type === "ascendant"){
      dispatch(ordenNameMayor())
    }else{
      dispatch(ordenNameMenor())
    }
    setCurrentPage(1)
    setOrder(e.target.value);
  };
const handleFilterSpecies = (e) => {
  e.preventDefault();
  // dispatch(orderBySpecies(e.target.value));
  dispatch(filterType(e.target.value))
  setCurrentPage(1);
  setOrder(e.target.value);
};
  return (
    <div className={styles.divi}>
      <div className={styles.divis}>
        <select onChange={handleFilterAlph} className={styles.select}>
          <option value="All" className={styles.order}>
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
          <option value="All" className={styles.order}>
            Filter by
          </option>
          <option value="All" className={styles.order}>
            All
          </option>
          <option value="animal" className={styles.order}>
            Show animals
          </option>
          <option value="tree" className={styles.order}>
            Show trees
          </option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

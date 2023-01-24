import React from 'react'
import styles from "./NavBar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from 'react-redux';

export const ModalBurger = ({isOpen, className}) => {

    const isModalNavBar = useSelector(state=>state.isModalNavBar)
  if(isOpen){
    return (
        <div
            className={`${className} ${styles.navBtn} ${styles.navCloseBtn}`}
            onClick={()=>isOpen()}
        >
            <FaTimes />
        </div>
      )
  }
}

import React from "react";
import styles from "./Header.module.css";

const Header = (props) => {
  const { imagen, text } = props;
  return (
    <>
      <div className={styles.header}>
        <div className={styles.degradado}>
          <h1>{text}</h1>
        </div>
        <img src={imagen} alt="img" />
      </div>
    </>
  );
};

export default Header;

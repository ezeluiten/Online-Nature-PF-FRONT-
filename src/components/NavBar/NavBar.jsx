import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./ModalBurger"

import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../store/actions";

function Navbar() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const shoppingCartItems = useSelector(state=>state.itemsCart)
  console.log("🚀 ~ file: NavBar.jsx:20 ~ Navbar ~ shoppingCartItems", shoppingCartItems)

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <div className={styles.logo}></div>
        <div className={`links ${clicked ? "active" : ""}`}>
          <div className="a">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              Home
            </NavLink>
          </div>

          <div className={styles.a}>
            <NavLink
              to="/campaign"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              Campaign
            </NavLink>
          </div>

          <div className={styles.a}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              Contact
            </NavLink>
          </div>

          <div className={styles.a}>
            <NavLink
              to="/reservation"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              My reservation
            </NavLink>
          </div>
          {isAuthenticated && (
            <div className={styles.cartLogoContainer}>
              { shoppingCartItems.items && shoppingCartItems.items.length > 0 && <span className={styles.cartQuantity}>{shoppingCartItems.items.length}</span>}
              <HiShoppingCart
                className={styles.cart}
                onClick={() => dispatch(setOpenModal(isModalOpen))}
              ></HiShoppingCart>
            </div>
          )}
          {isAuthenticated && (
            <button
              className={styles.button}
              onClick={() => dispatch(setOpenModal(isModalOpen))}
            >
              DONATE
            </button>
          )}
          {!isAuthenticated ? (
            <button
              className={styles.button}
              onClick={() => loginWithRedirect()}
            >
              log in
            </button>
          ) : (
            <button onClick={() => logout()} className={styles.button}>
              {" "}
              Log out
            </button>
          )}
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #568259;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  /* FIXED CULPABLE DE TODO */
  position: fixed;
  z-index: 10;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: row;
  right: 0;

  margin-top: 15px;
  justify-content: space-between;

  .a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    z-index: 2;
    .a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      .a {
        font-size: 1rem;
        color: white;
        display: inline;
      }

      margin-top: 15px;
      padding-right: 10px;

      display: flex;
      gap: 50px;
    }
  }
  .links.active {
    width: inherit;
    height: 42rem;
    /* width: 100%;
    height: 100%; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    left: 0px;
    right: 0;
    text-align: center;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #568259;
    justify-content: space-evenly;
    
    .a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #568259;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 0% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

import React, { useState } from "react";
import styled from "styled-components";
import BurguerButton from "./ModalBurger";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal, loginLoader } from "../../store/actions";
import { Profile } from "../Profile/Profile";
import { setSettingsModalGate } from "../../store/actions/index";
function Navbar() {
  const { logout, loginWithRedirect, isAuthenticated, user } = useAuth0();
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const userLogged = useSelector((state) => state.userLoggedDbRetrieved);

  const { payer, isOpenSettingsModal } = useSelector((state) => state);
  const openSettingsModal = () => {
    dispatch(setSettingsModalGate(isOpenSettingsModal));
  };
  const shoppingCartItems = useSelector((state) => state.itemsCart);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <div onClick={isOpenSettingsModal ? () => openSettingsModal() : null}>
      <NavContainer>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navActivety : styles.link
          }
        >
          <div className={styles.logo}></div>
        </NavLink>

   

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
              to="/Contactanos"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              Contact
            </NavLink>
          </div>

          {
            <div className={styles.a}>
            <NavLink to="/DashboarAdmin" className={styles.link}>
              My Dash
            </NavLink>
            </div>
          }

          <div className={styles.a}>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? styles.navActivety : styles.link
              }
            >
              About Us
            </NavLink>
          </div>
          {isAuthenticated && (
            <div className={styles.cartLogoContainer}>
              {shoppingCartItems.items &&
                shoppingCartItems.items.length > 0 && (
                  <span className={styles.cartQuantity}>
                    {shoppingCartItems.items.length}
                  </span>
                )}
              {shoppingCartItems.items &&
                shoppingCartItems.items.length > 0 && (
                  <span className={styles.cartQuantity}>
                    {shoppingCartItems.items.length}
                  </span>
                )}
              <HiShoppingCart
                className={styles.cart}
                onClick={() => dispatch(setOpenModal(isModalOpen))}
              ></HiShoppingCart>
            </div>
          )}

          {
            <button
              className={styles.button}
              onClick={
                isAuthenticated
                  ? isAuthenticated
                    ? () => dispatch(setOpenModal(isModalOpen))
                    : () => loginWithRedirect()
                  : () => loginWithRedirect()
              }
            >
              DONATE
            </button>
          }
          {
            !isAuthenticated ? (
              <button
                className={styles.button}
                onClick={() =>
                  dispatch(loginLoader(loginWithRedirect, isAuthenticated))
                }
              >
                log in
              </button>
            ) : (
              <Profile />
            )
            // <button onClick={() => logout()} className={styles.button}>
            //   {" "}
            //   Log out
            // </button>
          }
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
      </NavContainer>
    </div>
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
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  /* FIXED CULPABLE DE TODO */
  position: fixed;
  z-index: 10;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: -100%;
    top: -100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: absolute;
    left: -100%;
    top: -100%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    align-items: center;
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

      padding-right: 10px;

      display: flex;
      gap: 50px;
    }
  }
  .links.active {
    width: auto;
    /* height: auto; */
    height: 52rem;
    /* width: 100%;
    height: 100%; */
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: -15px;
    left: -468px;
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

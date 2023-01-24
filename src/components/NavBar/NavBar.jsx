import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './NavBar.module.css'
import { useDispatch, useSelector } from "react-redux";
import { setOpenModal } from "../../store/actions";


const NavBar = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(styles.responsiveNav);
	};

  return (
    <>
      <div ref={navRef} className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.links}>
          <div className={styles.a}>
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
          
          { isAuthenticated && <HiShoppingCart className={styles.cart} onClick={() =>  dispatch(setOpenModal(isModalOpen))} />}
          { isAuthenticated && <button className={styles.button} onClick={() =>  dispatch(setOpenModal(isModalOpen))}>DONATE</button>}
          {
            !isAuthenticated ? <button className={styles.button} onClick={()=>loginWithRedirect()}>log in</button>:<button onClick={() =>logout()}className={styles.button}> Log out</button>
          }

          <button
              className={`${styles.navBtn} ${styles.navCloseBtn}`}
              onClick={showNavbar}>
              <FaTimes />
				  </button>
        </div>

        <button className={styles.navBtn} onClick={showNavbar}>
				  <FaBars />
			  </button>

      </div>
      {/* <Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home"> NATURE ONLINE </Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#inicio">Inicio</Nav.Link>
							<Nav.Link href="/Adopcioness">Adopciones</Nav.Link>
							<NavDropdown title="Registro" id="basic-nav-dropdown">
								<NavDropdown.Item href="#registrarse">
									Registrarse
								</NavDropdown.Item>
								<NavDropdown.Item href="#iniciar sesion">
									Iniciar Sesion
								</NavDropdown.Item>
								<NavDropdown.Divider />
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar> */}
    </>
  );
};

export default NavBar;

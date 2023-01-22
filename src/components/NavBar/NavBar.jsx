import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
	return (
		<>
			<Navbar bg="light" expand="lg">
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
			</Navbar>
		</>
	);
};

export default NavBar;

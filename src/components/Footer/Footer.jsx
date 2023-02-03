import React from "react";
import style from "./Footer.module.css";
import logo from "../Footer/logo2.png";

const Foteer = () => {
	return (
		<footer className={style.piepagina}>
			<div className={style.grupo1}>
				<div className={style.box}>
					<figure>
						<a href="#">
							<img src={logo} alt="logo de App" />
						</a>
					</figure>
				</div>
				<div className={style.box}>
					<h2>SOBRE NOSOTROS</h2>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
						alias!
					</p>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
						alias!
					</p>
				</div>
				<div className={style.box}>
					<h2>SIGUENOS</h2>
					<div className={style.RedSocial}>
						<a href="#" className="fa fa-facebook"></a>
						<a href="#" className="fa fa-instagram"></a>
						<a href="#" className="fa fa-github"></a>
						<a href="#" className="fa fa-linkedin"></a>
					</div>
				</div>
			</div>
			<div className={style.grupo2}>
				<small>
					&copy; 2023 <b> PF Henry Grupo 17</b> - Todos los derechos Reservados.{" "}
				</small>
			</div>
		</footer>
	);
};

export default Foteer;

import React from "react";
import style from "./Footer.module.css";
import logo from "../Footer/logo2.png";

const Foteer = () => {
	return (
		<footer className={style.piepagina}>
			<div className={style.grupo1}>
				<div className={style.box}>
					<figure>
						<a href="/#">
							<img src={logo} alt="logo de App" />
						</a>
					</figure>
				</div>
				<div className={style.box}>
					<h2>ABOUT US</h2>
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
					<h2>WE USE</h2>
					<div className={style.RedSocial}>
						<a href="/#">
							<i class="fa-brands fa-react"></i>
						</a>
						<a href="/#">
							<i class="fa-brands fa-html5"></i>
						</a>
						<a href="/#">
							<i class="fa-brands fa-css3-alt"></i>
						</a>
						<a href="/#">
							<i class="fa-brands fa-sass"></i>
						</a>
					</div>
				</div>
			</div>
			<div className={style.grupo2}>
				<small>
					&copy; 2023 <b> PF Henry Group 17</b> - All rights reserved.{" "}
				</small>
			</div>
		</footer>
	);
};

export default Foteer;

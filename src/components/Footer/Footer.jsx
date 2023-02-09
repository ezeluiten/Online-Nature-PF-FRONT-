import React from "react";
import style from "./Footer.module.css";
import logo from "../../imagenes/logo2.png";

const Foteer = () => {
	return (
		<footer className={style.piepagina}>
			<div className={style.grupo1}>
				<div className={style.box}>
					<figure>
						<a href="/home">
							<div className={style.logo}></div>
						</a>
					</figure>
				</div>
				<div className={style.box}>
					<h2>ABOUT US</h2>
					<p>OnlineNature, search for forest support and endangered species.</p>
					<p>
						implementing campaigns to raise funds where the main motivation is
						to preserve our planet 💚
					</p>
				</div>
				<div className={style.box}>
					<h2>WE USE</h2>
					<div className={style.RedSocial}>
						<a
							href="https://es.reactjs.org/"
							target={"_blank"}
							rel="noreferrer"
						>
							<i class="fa-brands fa-react"></i>
						</a>
						<a
							href="https://developer.mozilla.org/es/docs/Web/JavaScript"
							target={"_blank"}
							rel="noreferrer"
						>
							<i class="fa-brands fa-square-js"></i>
						</a>
						<a href="https://nodejs.org/es/" target={"_blank"} rel="noreferrer">
							<i class="fa-brands fa-node-js"></i>
						</a>
						<a
							href="https://www.postgresql.org/"
							target={"_blank"}
							rel="noreferrer"
						>
							<i class="fas fa-database"></i>
						</a>
						<a
							href="https://developer.mozilla.org/es/docs/Web/HTML"
							target={"_blank"}
							rel="noreferrer"
						>
							<i class="fa-brands fa-html5"></i>
						</a>
						<a
							href="https://developer.mozilla.org/es/docs/Web/CSS"
							target={"_blank"}
							rel="noreferrer"
						>
							<i class="fa-brands fa-css3-alt"></i>
						</a>
						<a href="https://sass-lang.com/" target={"_blank"} rel="noreferrer">
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

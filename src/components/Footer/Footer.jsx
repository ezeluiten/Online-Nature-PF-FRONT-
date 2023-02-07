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
						-We are students of Henry and this is our final project. We strive
						to achieve excellent work.
					</p>
					<p>
						-Together as a group, we present our final project with enthusiasm
						and dedication.
					</p>
					<p>
						-We are proud to be Henry students and present our final work with
						professionalism.
					</p>
					<p>-We have come together to create an impressive final project.</p>
					<p>
						-With our training from Henry, we focus on doing a quality final
						project to demonstrate our learning.
					</p>
				</div>
				<div className={style.box}>
					<h2>WE USE</h2>
					<div className={style.RedSocial}>
						<a href="/#">
							<i class="fa-brands fa-react"></i>
						</a>
						<a href="/#">
							<i class="fa-brands fa-square-js"></i>
						</a>
						<a href="/#">
							<i class="fa-brands fa-node-js"></i>
						</a>
						<a href="/#">
							<i class="fas fa-database"></i>
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

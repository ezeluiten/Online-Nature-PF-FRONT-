import React from "react";
import style from "./Footer.module.css";

const Foteer = () => {
	return (
		<footer className={style.piepagina}>
			<div className={style.grupo1}>
				<div className={style.box}>
					<figure>
						<a href="#">
							<img
								src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/327312255_893360025040148_4680368650333124245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEG-TpcGzkkKywgl1K-0aWYnY4F1IgP_bmdjgXUiA_9uYX_xOThZZdtXjnUbLMF2M3v9AZHIwEYrspJDgXq4e1J&_nc_ohc=9257YwpNqhQAX8GFShT&_nc_oc=AQkzzzP1-AbENlvov4ouMAXRzPEakdU9ZvPAZAK_w3VuG_bjGWQcb7EAxdSicQ95zBbL2FYbOmicKflpW3oz2bcV&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfD5ueD03BAEpihbNXFjz0JoV17L2S-qKSSn0nmeOGcAMg&oe=63D90758"
								alt="logo de App"
							/>
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

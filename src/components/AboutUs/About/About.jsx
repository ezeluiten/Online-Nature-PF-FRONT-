import React from "react";
import style from "./About.module.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../NavBar/NavBar";

const About = () => {
	return (
		<>
			<Navbar />
			{/* <div className={style.tittle}>ABOUT US</div> */}
			<div className={style.main}>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://avatars.githubusercontent.com/u/109261084?s=400&u=30691b293ade1860904a2b09fd8fba519907a1f8&v=4"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>Daniela Pourrieux</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="/https://github.com/dhannypou" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a
								href="/https://www.linkedin.com/in/daniela-pourrieux-0900a6213/"
								target={"_blank"}
							>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://media.licdn.com/dms/image/D4E03AQH9kvlcpyKEeA/profile-displayphoto-shrink_800_800/0/1668554028334?e=1680739200&v=beta&t=npBowFrzVNlQxRuJDf51KFqozlutdLzbjZysptl5fdk"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>Jonas David Escorcia</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="https://github.com/jonas0321" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/jonas-fern%C3%A1ndez-29688824a/"
								target={"_blank"}
							>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://media.licdn.com/dms/image/D4D35AQFIQcDlRZas7w/profile-framedphoto-shrink_800_800/0/1666015377058?e=1676091600&v=beta&t=JTOe7jau2TZS7vWzHs-lB8pA9k_502DEsVKlbrupo2I"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>Ezequiel Alejandro Luiten</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="https://github.com/ezeluiten" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/ezequiel-luiten-5b0710224/"
								target={"_blank"}
							>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://media.licdn.com/dms/image/D4E03AQGAmi-qtP0qXw/profile-displayphoto-shrink_800_800/0/1673551648846?e=1680739200&v=beta&t=wwVK_AY4y7M-y8wj02Ge5pD5eqk82Bxpz9IxgrLJkSE"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>steban Puentes Roldan</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="https://github.com/esteban2841" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/esteban-puentes-183600192/"
								target={"_blank"}
							>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://media.licdn.com/dms/image/D4E35AQHWee_mGRwjqw/profile-framedphoto-shrink_800_800/0/1666449056742?e=1676091600&v=beta&t=w4HaDuWqogYwn_fgQa2t1KLMiUo08CM8W4pufdDr9wk"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>Daniel Cordero</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="https://github.com/danicorderoo" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a
								href="https://www.linkedin.com/in/dcordero-ing/"
								target={"_blank"}
							>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
				<div className={style.profile_card}>
					<div className={style.img}>
						<img
							src="https://media.licdn.com/dms/image/D4E35AQEs30xbEjo7sg/profile-framedphoto-shrink_800_800/0/1666463279778?e=1676091600&v=beta&t=TolPndwZm9gCoPNgJWv0-4qruPjvvEfl0jYOPRhPrUY"
							alt=""
						/>
					</div>
					<div className={style.caption}>
						<h3>José Manuel Castro</h3>
						<p> Full Stack Developer</p>
						<div className={style.social_links}>
							<a href="https://github.com/Ghoul-JS" target={"_blank"}>
								<i class="fa-brands fa-github"></i>
							</a>
							<a href="https://www.linkedin.com/in/ghoul-js/" target={"_blank"}>
								<i class="fa-brands fa-linkedin"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className={style.description}>
				<h1>DESCRIPTION</h1>
				<h2>
					Nuestra página web de donaciones está comprometida con la protección
					de los árboles y animales en peligro de extinción. Al realizar una
					donación a través de nuestra plataforma, estás contribuyendo a
					proyectos de conservación y protección de estas especies. Al aceptar
					nuestros términos y condiciones, aceptas que las donaciones son
					finales y no reembolsables. También aceptas que los proyectos y
					programas en los que se destinan tus donaciones pueden cambiar y que
					no garantizamos resultados específicos. Al utilizar nuestra página
					web, aceptas cumplir con todas las leyes y regulaciones aplicables.
					Estamos dedicados a proteger tu privacidad y seguridad en línea y
					procesaremos tus datos de manera responsable. Gracias por apoyar la
					conservación de árboles y animales en peligro de extinción.
				</h2>
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default About;

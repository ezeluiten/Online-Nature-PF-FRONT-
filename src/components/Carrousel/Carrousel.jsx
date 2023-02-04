import Carousel from "react-bootstrap/Carousel";
import style from "./Carrusel.module.css";
import { useNavigate } from "react-router-dom";
const img1 = require("../../imagenes/amazonas.jpg");
const img2 = require("../../imagenes/koala.webp");
const img3 = require("../../imagenes/mono.jpg");
const logo = require("../../imagenes/logo2.png");
function CarouselFadeExample() {
	const navigate = useNavigate();
	return (
		<Carousel fade>
			<Carousel.Item>
				<img className={style.imagen} src={img1} alt="First slide" />

				<Carousel.Caption>
					<div
						className={style.containeImg}
						onClick={() => {
							navigate("/home");
						}}
					>
						<div className={style.subContaineImg}>
							<div class={style.bg}>
								<h1>WELCOME TO NATURE ONLINE</h1>
							</div>
							<img className={style.logo} src={logo} alt="img_logo" />

							<br />
							<br />
							<br />

							<div>
								<button className={style.botonlan}>GET IN!..</button>
							</div>
						</div>
					</div>
					<div className={style.containerText}>
						<p>
							"Donating to protect endangered trees means invest in a greener
							and more sustainable future. By contributing, we are safeguarding
							biodiversity, fighting change climate change and creating a
							healthier habitat for generations future."
						</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className={style.imagen} src={img2} alt="Second slide" />

				<Carousel.Caption>
					<div
						className={style.containeImg}
						onClick={() => {
							navigate("/home");
						}}
					>
						<div className={style.subContaineImg}>
							<div class={style.bg}>
								<h1 class="t-stroke t-shadow-halftone">
									WELCOME TO NATURE ONLINE
								</h1>
							</div>
							<img className={style.logo} src={logo} alt="img_logo" />

							<br />
							<br />
							<br />

							<div>
								<button className={style.botonlan}>GET IN!..</button>
							</div>
						</div>
					</div>
					<div className={style.containerText}>
						<p>
							"Donating to endangered animals is a way powerful way to show love
							and responsibility towards the planet and their habitants. Every
							contribution, no matter how small, can help preserve diversity and
							ensure a brighter future Brilliant for them and for us."
						</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className={style.imagen} src={img3} alt="Third slide" />

				<Carousel.Caption>
					<div
						className={style.containeImg}
						onClick={() => {
							navigate("/home");
						}}
					>
						<div className={style.subContaineImg}>
							<div class={style.bg}>
								<h1 class="t-stroke t-shadow-halftone">
									WELCOME TO NATURE ONLINE
								</h1>
							</div>

							<img className={style.logo} src={logo} alt="img_logo" />

							<br />
							<br />
							<br />

							<div>
								<button className={style.botonlan}>GET IN!..</button>
							</div>
						</div>
					</div>
					<div className={style.containerText}>
						<p>
							"An act of generosity towards endangered animals can make the
							difference between your survival and your disappearance. Together
							we can protect biodiversity and ensure a sustainable future for
							the next generations."
						</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselFadeExample;

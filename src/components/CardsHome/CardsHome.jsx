import style from "./CardsHome.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

const img1 = require("../../imagenes/plant.jpg");
const img2 = require("../../imagenes/adopta.jpg");
const img3 = require("../../imagenes/donate.png");

export default function CardsHome(props) {
	return (
		<>
			<div className={style.contenedor}>
				<div className={style.card}>
					<img src={img1} className={style.cardImg} />
					<div className={style.cardContainer}>
						<div className="card-text-container">
							<h3 className={style.tittle}>Plant a tree!</h3>
							<h4 className={style.sabias}>Did you know?...</h4>
							<p>
								Planting a tree can help reduce air pollution. air and improve
								air quality.
							</p>
						</div>
						<br />
						<br />
						<button className={style.store}>
							<NavLink to="/Curiosidades" className={style.store}>
								Know more
							</NavLink>
						</button>
					</div>
				</div>

				<div className={style.card}>
					<img src={img2} className={style.cardImg} alt="img not found" />
					<div className={style.cardContainer}>
						<div>
							<h3 className={style.tittle}>Adopt an animal!</h3>
							<h4 className={style.sabias}>Did you know?...</h4>
							<p>
								Adopting an endangered animal can virtually help support
								conservation and protection efforts for that species.
							</p>
						</div>
						<button className={style.store}>
							<NavLink to="/Curiosidades" className={style.store}>
								Know more
							</NavLink>
						</button>
					</div>
				</div>

				<div className={style.card}>
					<img src={img3} className={style.cardImg} />
					<div className={style.cardContainer}>
						<div>
							<h3 className={style.tittle}>Donate = Save!</h3>
							<h4 className={style.sabias}>Did you know?...</h4>
							<p>
								Donating to a species conservation organization can help fund
								endangered animal research and protection projects
							</p>
						</div>
						<button className={style.store}>
							<NavLink to="/Curiosidades" className={style.store}>
								Know more
							</NavLink>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

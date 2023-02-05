import style from "./CardsHome.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const img1 = require("../../imagenes/plant.jpg");
const img2 = require("../../imagenes/adopta.jpg");
const img3 = require("../../imagenes/donate.png");

export default function CardsHome(props) {
	return (
		<>
			<div className={style.contenedor}>
				<div className={style.card}>
					<Card style={{ width: "20rem", height: "28rem" }}>
						<Card.Img
							variant="top"
							src={img1}
							style={{ width: "20rem", height: "150px" }}
							className={"cardImg"}
						/>
						<div className={style.cardContainer}>
							<Card.Text className="card-text-container">
								<Card.Title className={style.tittle}>Plant a tree!</Card.Title>
								<h3 className={style.sabias}>Did you know?...</h3>
								Planting a tree can help reduce air pollution. air and improve
								air quality.
							</Card.Text>
							<br />
							<br />
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
					</Card>
				</div>

				<div className={style.card}>
					<Card style={{ width: "20rem", height: "28rem"}}>
						<Card.Img
							variant="top"
							src={img2}
							style={{ width: "20rem", height: "150px" }}
						/>
						<div className={style.cardContainer}>
							<Card.Text>
								<Card.Title className={style.tittle}>
									Adopt an animal!
								</Card.Title>
								<h3 className={style.sabias}>Did you know?...</h3>
								Adopting an endangered animal can virtually help support
								conservation and protection efforts for that species.
							</Card.Text>
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
					</Card>
				</div>

				<div className={style.card}>
					<Card style={{ width: "20rem", height: "28rem" }}>
						<Card.Img
							variant="top"
							src={img3}
							style={{ width: "19.5rem", height: "150px" }}
						/>
						<div className={style.cardContainer}>
							<Card.Text>
								<Card.Title className={style.tittle}>
									Donate is Save!
								</Card.Title>
								<h3 className={style.sabias}>Did you know?...</h3>
								Donating to a species conservation organization can help fund
								endangered animal research and protection projects
							</Card.Text>
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
					</Card>
				</div>
			</div>
		</>
	);
}

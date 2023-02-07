<<<<<<< HEAD
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
          <Card style={{ width: "18rem", height: "24rem"}}>
            <Card.Img
              variant="top"
              src={img1}
              style={{ width: "18rem", height: "150px" }}
              className={"cardImg"}
            />
            <Card.Body>
              <Card.Title>The koala</Card.Title>
              <Card.Text>
                
             Koalas  They eat the upper leaves of Eucalipt trees and their excrement helps to recycle nutrients in the soil.
              </Card.Text>
              <Button className={style.store} variant="primary">
                Store
              </Button>
            </Card.Body>
          </Card>
        </div>
        
        <div className={style.card}>
        <Card style={{ width: "18rem", height: "24rem" }}>
          <Card.Img
            variant="top"
            src={img2}
            style={{ width: "18rem", height: "150px" }}
          />
          <Card.Body>
            <Card.Title>Pine tree</Card.Title>
            <Card.Text>
            Pine trees are considered evergreens because they keep their needles for approximately 2 years.
             When old needles falls, new needles quickly take their place.
            </Card.Text>
            <Button className={style.store} variant="primary">
              See more...
            </Button>
          </Card.Body>
        </Card>
        </div>
        
        <div className={style.card}>
          <Card style={{ width: "18rem", height: "24rem" }}>
            <Card.Img
              variant="top"
              src={img3}
              style={{ width: "18rem", height: "150px" }}
            />
            <Card.Body>
              <Card.Title>The tiger</Card.Title>
              <Card.Text>
              A tiger is a both a guardian and an indicator of a healthy forests.
               A healthy forests. Few understand that a live bird or insect is far more important to the economy than a dead one.
              </Card.Text>
              <Button className={style.store} variant="primary">
              See more...
              </Button>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </>
  );
}
=======
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
						<img
							src={img1}
							className={style.cardImg}
						/>
						<div className={style.cardContainer}>
							<div className="card-text-container">
								<h3 className={style.tittle}>Plant a tree!</h3>
								<h4 className={style.sabias}>Did you know?...</h4>
								<p>Planting a tree can help reduce air pollution. air and improve
								air quality.</p>
							</div>
							<br />
							<br />
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
				</div>

				<div className={style.card}>
						<img
							src={img2}
							className={style.cardImg}
						/>
						<div className={style.cardContainer}>
							<div>
								<h3 className={style.tittle}>
									Adopt an animal!
								</h3>
								<h4 className={style.sabias}>Did you know?...</h4>
								<p>Adopting an endangered animal can virtually help support
								conservation and protection efforts for that species.</p>
							</div>
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
				</div>

				<div className={style.card}>
						<img
							src={img3}
							className={style.cardImg}
						/>
						<div className={style.cardContainer}>
							<div>
								<h3 className={style.tittle}>
									Donate is Save!
								</h3>
								<h4 className={style.sabias}>Did you know?...</h4>
								<p>Donating to a species conservation organization can help fund
								endangered animal research and protection projects</p>
							</div>
							<button className={style.store} variant="primary">
								Know more
							</button>
						</div>
				</div>
			</div>
		</>
	);
}
>>>>>>> ef0a1c84eaafa2b28d27b559bf31f65f17382574

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
            />
            <Card.Body>
              <Card.Title>Plant a Tree!</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
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
            <Card.Title>Plant a Tree!</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
              src={img3}
              style={{ width: "18rem", height: "150px" }}
            />
            <Card.Body>
              <Card.Title>Plant a Tree!</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button className={style.store} variant="primary">
                Store
              </Button>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    </>
  );
}

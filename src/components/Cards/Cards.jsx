import style from "./Cards.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Cards(props) {
  const { imagen, title, price } = props;
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button className={style.donate} variant="primary">
            DONATE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

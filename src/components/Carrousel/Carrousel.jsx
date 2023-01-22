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
          <div className={style.container}>
            <img className={style.logo} src={logo} alt="img_logo" />
            <h3>First slide label</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
              voluptates temporibus a.
            </p>
            <button onClick={() => navigate("/login")} className={style.boton}>
              WELCOME
            </button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.imagen} src={img2} alt="Second slide" />

        <Carousel.Caption>
          <img className={style.logo} src={logo} alt="img_logo" />
          <h3>Second slide label</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
            voluptates temporibus a.
          </p>
          <button onClick={() => navigate("/login")} className={style.boton}>
            WELCOME
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.imagen} src={img3} alt="Third slide" />

        <Carousel.Caption>
          <img className={style.logo} src={logo} alt="img_logo" />
          <h3>Third slide label</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            quia culpa fugit saepe atque, exercitationem nesciunt. Sapiente
            voluptates temporibus a.
          </p>
          <button onClick={() => navigate("/login")} className={style.boton}>
            WELCOME
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;

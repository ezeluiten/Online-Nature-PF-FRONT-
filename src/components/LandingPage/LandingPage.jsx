import style from "./landingPage.module.css";
import CarouselFadeExample from "../Carrousel/Carrousel";

export function LandingPage() {
  return (
    <>
      <div className={style.container}>
        <CarouselFadeExample />
      </div>
    </>
  );
}

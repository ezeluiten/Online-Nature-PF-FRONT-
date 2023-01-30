import style from "./landingPage.module.css";
import CarouselFadeExample from "../Carrousel/Carrousel";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export function LandingPage() {

  return (
    <>
      <div className={style.container}>
        <CarouselFadeExample />
        
      </div>
    </>
  );
}

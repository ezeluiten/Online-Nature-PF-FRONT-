import style from "./landingPage.module.css";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export function LandingPage() {


  return (
    <section>
      <NavBar />
      <div className={style.container}>
        <div className={style.promotext}>
          <h3> Welcome </h3>
          <h3> Back </h3>
          <p> NATURE ONLINE </p>
        </div>
      </div>
    </section>
  );
}

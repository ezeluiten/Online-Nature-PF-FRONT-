import Login from "../Login/Login";
import style from "./landingPage.module.css";
import NavBar from "../NavBar/NavBar";
import styles from "../Login/Login.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export function LandingPage() {

	const { loginWithRedirect, logout} = useAuth0()
	

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
			<button onClick={()=> logout({
          returnTo: window.location.origin,
        })} className={styles.button}>
					Log out
			</button>
			<Login loginFn={loginWithRedirect}/>
		</section>
	);
}


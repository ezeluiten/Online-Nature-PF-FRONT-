import Login from "../Login/Login";
import style from "./landingPage.module.css";

export default function LandingPage() {
	return (
		<section>
			<div className={style.container}>
				<div className={style.promotext}>
					<h3> Welcome </h3>
					<h3> Back </h3>
					<p> NATURE ONLINE </p>
				</div>
			</div>
			<Login />
		</section>
	);
}

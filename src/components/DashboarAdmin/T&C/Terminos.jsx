import React from "react";
import style from "./Terminos.module.css";
import Navbar from "../../NavBar/NavBar";

const Terminos = () => {
	return (
		<>
			<Navbar />
			<div className={style.terms_and_conditions_container}>
				<h1 className={style.terms_and_conditions_title}>
					Terms and Conditions
				</h1>
				<p>
					Thank you for considering making a donation to our organization.
					dedicated to protecting endangered animals and trees. To the By making
					a donation, you agree to the following terms and conditions:
				</p>
				<ol>
					<li>All donations are final and cannot be refunded.</li>
					<li>
						We guarantee that your donation will be used for environmental
						purposes, including the protection of endangered animals and trees
						extinction.
					</li>
					<li>
						We will protect your personal information in accordance with our
						policy Of privacy.
					</li>
				</ol>
				<p>
					If you have any questions about these terms and conditions, please do
					not hesitate. in contacting us.
				</p>
			</div>
		</>
	);
};

export default Terminos;

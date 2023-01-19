import React from "react";
import LandingPage from "../LandingPage/LandingPage";
import NavBar from "../NavBar/NavBar";
import Carrousel from "../Carrousel/Carrousel";

const Home = () => {
	return (
		<div>
			<NavBar />
			<LandingPage />
			<Carrousel />
		</div>
	);
};

export default Home;

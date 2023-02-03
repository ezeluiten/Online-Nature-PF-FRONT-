import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import NavBar from "../NavBar/NavBar";
import Header from "../Header/Header";
import CardsHome from "../CardsHome/CardsHome";
import styles from "../Home/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserLoggedInfoToPay, setOpenModal } from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import { LoaderContainer } from "./loaderStyles";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Footer/Footer";

const img = require("../../imagenes/header-home.jpg");
export const Home = () => {
	const dispatch = useDispatch();
	const { isAuthenticated, user, logout } = useAuth0();

	console.log("🚀 ~ file: Home.jsx:15 ~ Home ~ user", user);
	useEffect(() => {
		dispatch(getUserLoggedInfoToPay({ ...user, isAuthenticated }));
	}, [isAuthenticated]);

	const loading = useSelector((state) => state.loading);
	const isModalOpen = useSelector((state) => state.isModalOpen);
	console.log("🚀 ~ file: Home.jsx:28 ~ Home ~ loading", loading);

	if (loading) {
		//componente loader
		<LoaderContainer>
			<ThreeDots
				height="80"
				width="80"
				radius="9"
				color="#4fa94d"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</LoaderContainer>;
	}

	if (!loading) {
		return (
			<div className={styles.body}>
				<NavBar />
				<Header
					imagen={img}
					text="
  We have suffered an alarming loss of biodiversity in recent decades...
  "
				/>
				<CardsHome />
				<Footer />
			</div>
		);
	}
};

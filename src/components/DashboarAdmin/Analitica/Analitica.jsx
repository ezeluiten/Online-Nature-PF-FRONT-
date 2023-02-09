import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Analitica.module.css";
import NavBar from "../../NavBar/NavBar";
import logo from "../images/logo2.png";
import { getDonations } from "../../../store/actions/index";
import GraphicDonation from "../Donaciones/GraphicDonations";

import { useAuth0 } from "@auth0/auth0-react";

const Analitica = () => {
	const dispatch = useDispatch();
	const donations = useSelector((state) => state.donations);
	const donationsThreeMonths = useSelector(
		(state) => state.donationsThreeMonths
	);

	console.log(donations);

	useEffect(() => {
		dispatch(getDonations());
	}, [dispatch]);

	const suma = donationsThreeMonths.data?.reduce(
		(acc, obj) => acc + obj.amount,
		0
	);
	const quantity = donationsThreeMonths.data?.reduce(
		(acc, obj) => acc + obj.quantity,
		0
	);

	const { logout } = useAuth0();
	return (
		<div className={style.mainContainerDash}>
			<NavBar />
			<div className={style.dashbody}>
				<div className={style.container}>
					<aside>
						<div className={style.top}>
							<div className={style.logo}>
								<img src={logo} alt="logo" className={style.imgimg} />
								<h2 className={style.lash2}>
									NATURE<span class={style.dangerr}>ONLINE</span>
								</h2>
							</div>
							<div class={style.close} id={style.close_btn}>
								<span class="material-icons-sharp">close</span>
							</div>
						</div>
						<div className={style.sidebar}>
							<a href="/DashboarAdmin" className={style.aa}>
								<span class="material-icons-sharp">grid_view</span>
								<h3 className={style.lash3}>Dashboard</h3>
							</a>
							<a href="/profile" className={style.aa}>
								<span class="material-icons-sharp">people</span>
								<h3 className={style.lash3}>Customers</h3>
							</a>
							<a href="/Analitica" className={style.aa}>
								<span class="material-icons-sharp">insights</span>
								<h3 className={style.lash3}>Analytics</h3>
							</a>
							<a href="/Terminos" className={style.aa}>
								<span class="material-symbols-sharp">gavel</span>
								<h3 className={style.lash3}>Términos</h3>
							</a>
							<a href="/Crud" className={style.aa}>
								<span class="material-icons-sharp">add</span>
								<h3 className={style.lash3}>Add Products</h3>
							</a>
							<a href="*" onClick={() => logout()} className={style.aa}>
								<span class="material-icons-sharp">logout</span>
								<h3 className={style.lash3}>Logout</h3>
							</a>
						</div>
					</aside>
					<main className={style.mains}>
						<h1 className={style.lash1}>Dashboard</h1>
						<div className={style.grafico}>
							<GraphicDonation />
						</div>
					</main>
					<div className={style.right}>
						<div className={style.sales_analytics}>
							<h2 className={style.lash2}>Analítica</h2>
							<div className={style.item_online}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">volunteer_activism</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3 className={style.lash3}>Last Three Months</h3>
										<h5 className={style.successs}>Donations {suma} COP</h5>
									</div>
								</div>
							</div>
							<div className={style.item_offline}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">visibility</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3 className={style.lash3}>Last Three Months</h3>
										<h5 className={style.primaryy}>Quantity: {quantity}</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Analitica;

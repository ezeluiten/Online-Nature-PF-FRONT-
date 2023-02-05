import React from "react";
import style from "../Analitica/Analitica.module.css";
import NavBar from "../../NavBar/NavBar";

import logo from "../images/logo2.png";

const Analitica = () => {
	return (
		<div className={style.mainContainerDash}>
			<NavBar />
			<div className={style.dashbody}>
				<div className={style.container}>
					<aside>
						<div className={style.top}>
							<div className={style.logo}>
								<img src={logo} alt="logo" />
								<h2>
									NATURE<span class={style.danger}>ONLINE</span>
								</h2>
							</div>
							<div class={style.close} id={style.close_btn}>
								<span class="material-icons-sharp">close</span>
							</div>
						</div>
						<div className={style.sidebar}>
							<a href="/home">
								<span class="material-icons-sharp">grid_view</span>
								<h3>Dashboard</h3>
							</a>
							<a href="/profile">
								<span class="material-icons-sharp">people</span>
								<h3>Customers</h3>
							</a>
							<a href="/Analitica">
								<span class="material-icons-sharp">insights</span>
								<h3>Analytics</h3>
							</a>
							<a href="Contactanos">
								<span class="material-icons-sharp">contact_mail</span>
								<h3>contact us</h3>
							</a>
							<a href="/campaign">
								<span class="material-icons-sharp">inventory </span>
								<h3>Products</h3>
							</a>
							<a href="/Terminos">
								<span class="material-symbols-sharp">gavel</span>
								<h3>Términos</h3>
							</a>
							<a href="/campaign">
								<span class="material-icons-sharp">add</span>
								<h3>Add Products</h3>
							</a>
							<a href="/Login">
								<span class="material-icons-sharp">logout</span>
								<h3>Logout</h3>
							</a>
						</div>
					</aside>
					<main>
						<h1>Dashboard</h1>

						<div className={style.insigths}>
							<div className={style.sales}>
								<span class="material-icons-sharp">analytics</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Donations</h3>
										<h2>$ 1,000,000</h2>
									</div>
									<div className={style.progress}>
										<svg>
											<circle cx="38" cy="38" r="36"></circle>
										</svg>
										<div className={style.number}>
											<p>80%</p>
										</div>
									</div>
								</div>
								<small className={style.text_muted}> last 24 hours</small>
							</div>
							<div className={style.expenses}>
								<span class="material-icons-sharp">bar_chart</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Total expenditures</h3>
										<h2>$ 150,000</h2>
									</div>
									<div className={style.progress}>
										<svg>
											<circle cx="38" cy="38" r="36"></circle>
										</svg>
										<div className={style.number}>
											<p>42%</p>
										</div>
									</div>
								</div>
								<small className={style.text_muted}> last 24 hours</small>
							</div>
							<div className={style.income}>
								<span class="material-icons-sharp">stacked_line_chart</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Total revenues</h3>
										<h2>$ 1,500,000</h2>
									</div>
									<div className={style.progress}>
										<svg>
											<circle cx="38" cy="38" r="36"></circle>
										</svg>
										<div className={style.number}>
											<p>90%</p>
										</div>
									</div>
								</div>
								<small className={style.text_muted}> last 24 hours</small>
							</div>
						</div>
					</main>
					<div className={style.right}>
						<div className={style.sales_analytics}>
							<h2>Analítica</h2>
							<div className={style.item_online}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">volunteer_activism</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3>Donations</h3>
										<small className={style.text_muted}>last 24 hours</small>
									</div>
									<h5 className={style.success}>+39%</h5>
									<h3>3849</h3>
								</div>
							</div>
							<div className={style.item_offline}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">visibility</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3>Website visits</h3>
										<small className={style.text_muted}>last 24 hours</small>
									</div>
									<h5 className={style.primary}>+39%</h5>
									<h3>3849</h3>
								</div>
							</div>
							<div className={style.item_customers}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">travel_explore</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3>Searchs</h3>
										<small className={style.text_muted}>last 24 hours</small>
									</div>
									<h5 className={style.success}>+39%</h5>
									<h3>3849</h3>
								</div>
							</div>
							<div className={style.item_add_products}>
								<div>
									<span class="material-symbols-sharp">add</span>
									<h3>Add Product</h3>
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

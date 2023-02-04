import React from "react";
import style from "./DashboarAdmin.module.css";
import NavBar from "../NavBar/NavBar";
import logo from "./images/logo2.png";
import "./DashboarAdmin.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const DashboarAdmin = () => {
	const { logout } = useAuth0();
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
							<a onClick={() => logout()}>
								<span class="material-icons-sharp">logout</span>
								<h3>Logout</h3>
							</a>
						</div>
					</aside>
					<main className={style.mains}>
						<h1>Dashboard</h1>
						<div className={style.date}>
							<input type="date" />
						</div>
						<div className={style.recent_orders}>
							<h2>Donations</h2>
							<table className={style.tableContainer}>
								<thead>
									<tr>
										<th>Product name</th>
										<th>Number of Products</th>
										<th>Pay</th>
										<th>State</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Aguila Harpía</td>
										<td>1</td>
										<td>$25</td>
										<td className={style.warning}>Earring</td>
										<a href="/Analitica">
											<h3>Details</h3>
										</a>
										{/* <a src="/#" className={style.primary}>Details</a> */}
									</tr>
									<tr>
										<td>Pingüino de Galápagos</td>
										<td>1</td>
										<td>$25</td>
										<td className={style.warning}>Earring</td>
										<a href="/Analitica">
											<h3>Details</h3>
										</a>
									</tr>
									<tr>
										<td>Albatros</td>
										<td>2</td>
										<td>$50</td>
										<td className={style.warning}>Earring</td>
										<a href="/Analitica">
											<h3>Details</h3>
										</a>
									</tr>
									<tr>
										<td>Delfín rosa</td>
										<td>1</td>
										<td>$75</td>
										<td className={style.warning}>Pagado</td>
										<a href="/Analitica">
											<h3>Details</h3>
										</a>
									</tr>
									<tr>
										<td>Tigre</td>
										<td>5</td>
										<td>$125</td>
										<td className={style.warning}>Pagado</td>
										<a href="/Analitica">
											<h3>Details</h3>
										</a>
									</tr>
								</tbody>
							</table>
							<a href="/home">Show everything</a>
						</div>
					</main>
					{/* Menu + theme dark*/}
					<div className={style.right}>
						{/* <div className={style.top}>
							<button id={style.menu_btn}>
								<span class="material-symbols-sharp">menu</span>
							</button>
						</div> */}
						<div className={style.recent_updates}>
							<br />
							<br />
							<h2>Recent Updates</h2>
							<div className={style.updates}>
								<div className={style.update}>
									<div className={style.profile_photo}>
										<img
											src="https://imagenes.canalrcn.com/lomaslike/shakira-habria-reaccionado-a-foto-de-pique.webp?VersionId=FfhKD5nxRPTGx8LRAThy_MM0pZ7RTwT5"
											alt=""
										/>
									</div>
									<div className={style.message}>
										<p className="pp">
											<b>Shakira</b> He made a donation.
										</p>
										<small className={style.text_muted}>2 minutes ago</small>
									</div>
								</div>
								<div className={style.update}>
									<div className={style.profile_photo}>
										<img
											src="https://www.musicmundial.com/wp-content/uploads/2022/07/Karol-G-disfruta-sus-vacaciones-con-atrevidas-fotos-que-enti.jpg"
											alt=""
										/>
									</div>
									<div className={style.message}>
										<p className="pp">
											<b>Becky G</b> He made a donation.
										</p>
										<small className={style.text_muted}>2 minutes ago</small>
									</div>
								</div>
								<div className={style.update}>
									<div className={style.profile_photo}>
										<img
											src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/1200px-Mike_Tyson_2019_by_Glenn_Francis.jpg"
											alt=""
										/>
									</div>
									<div className={style.message}>
										<p className="pp">
											<b>Mike Tyson</b> He made a donation.
										</p>
										<small className={style.text_muted}>2 minutes ago</small>
									</div>
								</div>
								<div className={style.update}>
									<div className={style.profile_photo}>
										<img
											src="https://media.tycsports.com/files/2023/01/27/527922/leo-messi-psg_416x234.webp"
											alt=""
										/>
									</div>
									<div className={style.message}>
										<p className="pp">
											<b>Lionel Messi</b> He made a donation.
										</p>
										<small className={style.text_muted}>2 minutes ago</small>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<script src="./Dashboard.js"></script>
		</div>
	);
};

export default DashboarAdmin;

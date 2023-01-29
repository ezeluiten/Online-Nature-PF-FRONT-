import React from "react";
import style from "./DashboarAdmin.module.css";
import NavBar from "../NavBar/NavBar";

const DashboarAdmin = () => {
	return (
		<div>
			<NavBar />
			<div className={style.dashbody}>
				<div className={style.container}>
					<aside>
						<div className={style.top}>
							<div className={style.logo}>
								<img
									src="https://scontent.ftuc4-2.fna.fbcdn.net/v/t39.30808-6/327312255_893360025040148_4680368650333124245_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEG-TpcGzkkKywgl1K-0aWYnY4F1IgP_bmdjgXUiA_9uYX_xOThZZdtXjnUbLMF2M3v9AZHIwEYrspJDgXq4e1J&_nc_ohc=9257YwpNqhQAX8GFShT&_nc_oc=AQkzzzP1-AbENlvov4ouMAXRzPEakdU9ZvPAZAK_w3VuG_bjGWQcb7EAxdSicQ95zBbL2FYbOmicKflpW3oz2bcV&_nc_ht=scontent.ftuc4-2.fna&oh=00_AfD5ueD03BAEpihbNXFjz0JoV17L2S-qKSSn0nmeOGcAMg&oe=63D90758"
									alt="logo"
								/>
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
							<a href="/home" className={style.active}>
								<span class="material-icons-sharp">people</span>
								<h3>Clientes</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">receipt_long</span>
								<h3>Pedidos</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">insights</span>
								<h3>Analítica</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">mail_outline</span>
								<h3>Mensajes</h3>
								<span className={style.message_count}>26</span>
							</a>
							<a href="/campaign">
								<span class="material-icons-sharp">inventory </span>
								<h3>Productos</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">report_gmailerrorred</span>
								<h3>Informes</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">settings</span>
								<h3>Ajustes</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">add</span>
								<h3>Agregar Productos</h3>
							</a>
							<a href="/home">
								<span class="material-icons-sharp">logout</span>
								<h3>Logout</h3>
							</a>
						</div>
					</aside>
					<main>
						<h1>Dashboard</h1>
						<div className={style.date}>
							<input type="date" />
						</div>
						<div className={style.insigths}>
							<div className={style.sales}>
								<span class="material-icons-sharp">analytics</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Donaciones</h3>
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
								<small className={style.text_muted}> Ultimas 24Hs</small>
							</div>
							<div className={style.expenses}>
								<span class="material-icons-sharp">bar_chart</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Total de Gastos</h3>
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
								<small className={style.text_muted}> Ultimas 24Hs</small>
							</div>
							<div className={style.income}>
								<span class="material-icons-sharp">stacked_line_chart</span>
								<div className={style.middle}>
									<div className={style.left}>
										<h3>Total de Ingresos</h3>
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
								<small className={style.text_muted}> Ultimas 24Hs</small>
							</div>
						</div>
						<div className={style.recent_orders}>
							<h2>Donaciones</h2>
							<table>
								<thead>
									<tr>
										<th>Nombre del Producto</th>
										<th>Numero de Productos</th>
										<th>Pago</th>
										<th>Estado</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Aguila Harpía</td>
										<td>1</td>
										<td>$25</td>
										<td className={style.warning}>Pendiente</td>
										<td className={style.primary}>Detalles</td>
									</tr>
									<tr>
										<td>Pingüino de Galápagos</td>
										<td>1</td>
										<td>$25</td>
										<td className={style.warning}>Pendiente</td>
										<td className={style.primary}>Detalles</td>
									</tr>
									<tr>
										<td>Albatros</td>
										<td>2</td>
										<td>$50</td>
										<td className={style.warning}>Pendiente</td>
										<td className={style.primary}>Detalles</td>
									</tr>
									<tr>
										<td>Delfín rosa</td>
										<td>1</td>
										<td>$75</td>
										<td className={style.warning}>Pagado</td>
										<td className={style.primary}>Detalles</td>
									</tr>
									<tr>
										<td>Tigre</td>
										<td>5</td>
										<td>$125</td>
										<td className={style.warning}>Pagado</td>
										<td className={style.primary}>Detalles</td>
									</tr>
								</tbody>
							</table>
							<a href="/home">Mostrar Todo</a>
						</div>
					</main>
					{/* Menu + theme dark*/}
					<div className={style.right}>
						<div className={style.top}>
							<button id={style.menu_btn}>
								<span class="material-symbols-sharp">menu</span>
							</button>
						</div>
						<div className={style.recent_updates}>
							<br />
							<br />
							<h2>Actualizaciones Recientes</h2>
							<div className={style.updates}>
								<div className={style.update}>
									<div className={style.profile_photo}>
										<img
											src="https://imagenes.canalrcn.com/lomaslike/shakira-habria-reaccionado-a-foto-de-pique.webp?VersionId=FfhKD5nxRPTGx8LRAThy_MM0pZ7RTwT5"
											alt=""
										/>
									</div>
									<div className={style.message}>
										<p>
											<b>Shakira</b> Hizo una donacion.
										</p>
										<small className={style.text_muted}>Hace 2 minutos</small>
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
										<p>
											<b>Becky G</b> Hizo una donacion.
										</p>
										<small className={style.text_muted}>Hace 2 minutos</small>
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
										<p>
											<b>Mike Tyson</b> Hizo una donacion.
										</p>
										<small className={style.text_muted}>Hace 2 minutos</small>
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
										<p>
											<b>Lionel Messi</b> Hizo una donacion.
										</p>
										<small className={style.text_muted}>Hace 2 minutos</small>
									</div>
								</div>
							</div>
						</div>
						<div className={style.sales_analytics}>
							<h2>Analítica</h2>
							<div className={style.item_online}>
								<div className={style.icon}>
									<span class="material-symbols-sharp">volunteer_activism</span>
								</div>
								<div className={style.right}>
									<div className={style.info}>
										<h3>Donaciones</h3>
										<small className={style.text_muted}>Ultimas 24 Hs</small>
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
										<h3>Visitas a la Web</h3>
										<small className={style.text_muted}>Ultimas 24 Hs</small>
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
										<h3>Busqueda</h3>
										<small className={style.text_muted}>Ultimas 24 Hs</small>
									</div>
									<h5 className={style.success}>+39%</h5>
									<h3>3849</h3>
								</div>
							</div>
							<div className={style.item_add_products}>
								<div>
									<span class="material-symbols-sharp">add</span>
									<h3>Agregar Producto</h3>
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

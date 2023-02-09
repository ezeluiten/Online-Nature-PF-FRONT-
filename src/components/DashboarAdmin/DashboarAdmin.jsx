import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./DashboarAdmin.module.css";
import NavBar from "../NavBar/NavBar";
import logo from "./images/logo2.png";
import {
  getDonations,
  getDonationsByItemsFromTickets,
  getRecentClient,
} from "../../store/actions";

import { useAuth0 } from "@auth0/auth0-react";

const DashboarAdmin = () => {
  const dispatch = useDispatch();
  let lastTransactions = useSelector((state) => state.lastTransactions);
  let donationsByItem = useSelector((state) => state.donationsByItem);


  useEffect(() => {
    dispatch(getDonations());
    dispatch(getRecentClient());
    dispatch(getDonationsByItemsFromTickets());
  }, [dispatch]);

  const { logout } = useAuth0();
  return (
    <div className={style.mainContainerDash}>
      <NavBar />
      <div className={style.dashbody}>
        <div className={style.container}>
          <aside>
            <div className={style.top}>
              <div className={style.logo}>
                <img src={logo} alt="logo" className={style.img} />
                <h2 className={style.lash2}>
                  ONLINE<span class={style.dangerr}>NATURE</span>
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
              {/* <a href="Contactanos" className={style.aa}>
								<span class="material-icons-sharp">contact_mail</span>
								<h3 className={style.lash3}>contact us</h3>
							</a>
							<a href="/Crud" className={style.aa}>
								<span class="material-icons-sharp">inventory </span>
								<h3 className={style.lash3}>Products</h3>
							</a> */}
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

            <h2 className={style.lash2}>Donations</h2>
            <div className={style.recent_orders}>
              <table className={style.tableContainer}>
                <thead>
                  <tr>
                    <th>Product name</th>
                    <th>Number of Products</th>
                    <th>Pay</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {donationsByItem.data?.map((e) => (
                    <tr key={e.id}>
                      <td>{e.name}</td>
                      <td>{e.quantity}</td>
                      <td>{e.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* 	<a href="/home">Show everything</a> */}
            </div>
            {/*   <div>
						  	<Crud/>
						  </div> */}
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
              <h2 className={style.lash2}>Recent Updates</h2>
              <div className={style.updates}>
                {lastTransactions?.map((e) => {
                  return (
                    <div className={style.update}>
                      <div className={style.profile_photo}>
                        <img src={e.picture} alt={e.name} />
                      </div>
                      <div className={style.message}>
                        <p className="pp">
                          <b>{e.name}</b> He made a donation.
                        </p>
                        <small className={style.text_muted}>
                          {e.since} days
                        </small>
                      </div>
                    </div>
                  );
                })}
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

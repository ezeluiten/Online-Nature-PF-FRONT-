import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	StoreCampaingContainer,
	FiltersContainer,
	CardLabel,
	Card,
	CardContainer,
} from "./CampaingStyles";
import {
	setOpenModal,
	setDonationCartElements,
	sorting,
	setFavorites,
	getAnimalsById,
	getUserLoggedInfoToPay,
	getTickets,
	getDetail,
} from "../../store/actions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { IoHeart } from "react-icons/io5";
import Filters from "../filters/filters";
import Pagination from "../Paginate/Paginate";
import Swal from "sweetalert2";
import { setSettingsModalGate } from "../../store/actions/index";
import { height } from "@mui/system";
import Footer from "../Footer/Footer";
export const Campaing = () => {
  const { logout, loginWithRedirect,user, isAuthenticated, getAccessTokenSilently } = useAuth0();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	let catalogue = useSelector((state) => state.donationCatalogue);
	const storageCatalogue = JSON.parse(localStorage.getItem("catalogue"));
	const storageFavorites = JSON.parse(localStorage.getItem("favorites"));
	useEffect(() => {
		dispatch(getUserLoggedInfoToPay({ ...user, isAuthenticated }));
	}, [isAuthenticated]);
	storageCatalogue &&
		storageCatalogue.forEach((favorito) => {
			catalogue = catalogue.map((item) => {
				if (item._id == favorito._id) {
					return {
						...favorito,
					};
				} else {
					return {
						...item,
					};
				}
			});
		});

	const isModalOpen = useSelector((state) => state.isModalCashierOpen);
	const { payer, isOpenSettingsModal } = useSelector((state) => state);
	const openSettingsModal = () => {
		dispatch(setSettingsModalGate(isOpenSettingsModal));
	};
	const [currentPage, setCurrentPage] = useState(1);
	const [elementPerPage, setElementPerPage] = useState(9);
	const [order, setOrder] = useState("");
	const indexOfLastCatalogue = currentPage * elementPerPage;
	const indexOfFirstCatalogue = indexOfLastCatalogue - elementPerPage;

	const handleClick = (id) => {
		dispatch(getDetail(id));
		navigate(`/campaign/${id}`);
	};

	const currentCatalogue = catalogue.slice(
		indexOfFirstCatalogue,
		indexOfLastCatalogue
	);

	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	const HandleClickCart = () => {
		Swal.fire({
			position: "top-start",
			icon: "success",
			title: "added to cart successfully",
			showConfirmButton: false,
			timer: 1000,
			width: 300,
		});
	};

	const animate = (item) => {
		dispatch(setFavorites(item));

		storageFavorites.map((favorito) => {
			if (favorito._id != item._id) {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "added to favorite",
					showConfirmButton: false,
					timer: 1500,
				});
			} else {
				Swal.fire({
					position: "top-end",
					icon: "success",
					title: "eliminate to favorite",
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};
	const img = require("../../imagenes/chile.jpg");
	return (
		<div onClick={isOpenSettingsModal ? () => openSettingsModal() : null}>
			<NavBar />
			<Header
				imagen={img}
				text="Chile needs us today, it has one of the biggest forest fires recent history"
			/>
			<SearchBar />
			<Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
			<StoreCampaingContainer>
				<CardContainer>
					{currentCatalogue.map((item) => {
						if (item.image) {
							return (
								<Card key={item._id}>
									<div onClick={() => handleClick(item._id)}>
										<img src={item.image} alt="img not found" />
									</div>
									<CardLabel>
										<h3>{item.title}</h3>
										<p>
											Symbolic Adoption <strong>{item.amount} (COP)</strong>{" "}
										</p>

										{isAuthenticated && (
											<button
												className="donate-button"
												onClick={() => {
													// dispatch(setOpenModal(isModalOpen))
													dispatch(
														setDonationCartElements(item),
														HandleClickCart()
													);
												}}
											>
												Add cart
											</button>
										)}
										{!isAuthenticated && (
											<button
												className={"donate-button"}
												onClick={() => loginWithRedirect()}
											>
												log in
											</button>
										)}
										{isAuthenticated && (
											<div
												className={`icon-favorites ${item.selected}`}
												onClick={() => animate(item)}
											>
												<IoHeart />
											</div>
										)}
									</CardLabel>
								</Card>
							);
						} else {
							<></>;
						}
					})}
				</CardContainer>
			</StoreCampaingContainer>
			<Pagination
				elementPerPage={elementPerPage}
				element={catalogue.length}
				pagination={pagination}
			/>
			<Footer />
		</div>
	);
};

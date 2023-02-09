import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	FavoriteCard,
	ViewSelectedContainer,
	CardsContainer,
} from "./ViewSelectedStyles";
import style from "./ViewSelected.module.css";
import Pagination from "../../Paginate/Paginate";
import { IoCloseCircleOutline } from "react-icons/io5"
import { getTicketsByClientId, setDonationCartElements, setFavorites } from '../../../store/actions';
import { useEffect } from 'react';
import { setSettingsModalGate } from "../../../store/actions/index";
import { Link } from "react-router-dom";
import { HeartIcon } from "./icons"
const _ = require("lodash")

export const ViewSelected = ({ isOpen }) => {
	let favorites = useSelector((state) => state.favorites);
	let catalogue = useSelector((state) => state.donationCatalogue);
	const storageFavorites = JSON.parse(localStorage.getItem("favorites"));
  const ticketsByUserLogged = useSelector(state=>state.ticketsByUserLogged)

  const itemsDonatedByUser = []
  
  const enrichTicketWithImages = ticketsByUserLogged.map(itemsDonated=>{
    catalogue.map(itemCatalogue =>{

      if(itemCatalogue._id == itemsDonated.id){
        itemsDonatedByUser.push({
          ...itemsDonated,
          image_detail:itemCatalogue.image_detail,
          image:itemCatalogue.image,
          description:itemCatalogue.description,
        })
      }

      
    })
  })

	const [currentPage, setCurrentPage] = useState(1);
	const [elementPerPage, setElementPerPage] = useState(6);
	const indexOfLastElement = currentPage * elementPerPage;
	const indexOfFirstElement = indexOfLastElement - elementPerPage;
	const dispatch = useDispatch();

	const [currentFav, setCurrentFav] = useState([]);
	const { payer, isOpenSettingsModal } = useSelector((state) => state);
	const openSettingsModal = () => {
		dispatch(setSettingsModalGate(isOpenSettingsModal));
	};

	const pagination = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const { open, view } = isOpen;

  useEffect(() => {
		dispatch(getTicketsByClientId())
	}, []);

	useEffect(() => {
		setCurrentFav(
			storageFavorites
				? [...storageFavorites].slice(indexOfFirstElement, indexOfLastElement)
				: [...favorites].slice(indexOfFirstElement, indexOfLastElement)
		);
	}, [storageFavorites]);

	if (open && view == "family") {
		return (
			<ViewSelectedContainer
				onClick={isOpenSettingsModal ? () => openSettingsModal() : null}
			>
				<CardsContainer>
					<h4 className="title-welcome">Here you can find your new family members: </h4>
					<p className="title-welcome">In the following section you can find any symbolic adopted animals or trees that you aim to preserve, if we haven't say it before, thanks for contributing to save our planet!!!</p>
					<div className={style.containerMain}> 
						{itemsDonatedByUser && itemsDonatedByUser.length > 0 ? (
							itemsDonatedByUser?.map((item) => {
								return (
									<>
										<div className={style.addedCard}>
											<FavoriteCard
												key={item.id}
												className={"card-container"}
											>
												<div className={"image-container"}>
													<img
														src={item.image_detail}
														alt={item.title}
													/>
												</div>
												<div className="button-container">
													<button
														className={"info-title"}
														onClick={() =>
															dispatch(setDonationCartElements(item))
														}
													>
														{`Donate once more `}{<HeartIcon/>}
													</button>
												</div>
												<div className={"info-container"}>
													<p>{item.title}</p>
                          <p>You have donated {item.quantity} times for our appreciated friend the {item.title}, Thanks a lot for your donations and care!!!</p>
												</div>
											</FavoriteCard>
										</div>
									</>
								);
							})
						) : (
							<div className={style.containerAdd}>
								<p>!Add a little friend!</p>
								<Link to="/campaign">
									<div className={style.emptyCardFavorite}>+</div>
								</Link>
							</div>
						)}
						{itemsDonatedByUser && itemsDonatedByUser.length >= 1 ? (
							<div className={style.addedCard}>
								<Link to="/campaign">
									<div className={style.emptyCardFavorite}>+</div>
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
				</CardsContainer>
			</ViewSelectedContainer>
		);
	} else if (open && view == "favorites") {
		return (
			<ViewSelectedContainer
				onClick={isOpenSettingsModal ? () => openSettingsModal() : null}
			>
				<CardsContainer>
					<h2 className="title-welcome">
						Welcome to your favorite's space let's change the world together
					</h2>
					<h4 className="title-welcome">Your favorite friend's panel: </h4>
					<div className={style.containerMain}>
						{currentFav && currentFav.length > 0 ? (
							currentFav?.map((favorite) => {
								return (
									<>
										<div className={style.addedCard}>
											<FavoriteCard
												key={favorite._id}
												className={"card-container"}
											>
												<div className={"image-container"}>
													<img
														src={favorite.image_detail}
														alt={favorite.title}
													/>
													{
														<IoCloseCircleOutline
															className="button-delete-fav"
															onClick={() => dispatch(setFavorites(favorite))}
														/>
													}
												</div>
												<div className="button-container">
													<button
														className={"info-title"}
														onClick={() =>
															dispatch(setDonationCartElements(favorite))
														}
													>
														Donate now
													</button>
												</div>
												<div className={"info-container"}>
													<p>{favorite.title}</p>

													<p>{favorite.description.substr(0, 40) + "..."}</p>
												</div>
											</FavoriteCard>
										</div>
									</>
								);
							})
						) : (
							<div className={style.containerAdd}>
								<p>!Add a little friend!</p>
								<Link to="/campaign">
									<div className={style.emptyCardFavorite}>+</div>
								</Link>
							</div>
						)}
						{currentFav && currentFav.length >= 1 ? (
							<div className={style.addedCard}>
								<Link to="/campaign">
									<div className={style.emptyCardFavorite}>+</div>
								</Link>
							</div>
						) : (
							<></>
						)}
					</div>
				</CardsContainer>
				<Pagination
					elementPerPage={elementPerPage}
					element={favorites.length}
					pagination={pagination}
				/>
			</ViewSelectedContainer>
		);
	} else {
		return <></>;
	}
};

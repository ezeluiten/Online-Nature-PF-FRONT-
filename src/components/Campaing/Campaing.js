import React, { useEffect, useState } from "react";
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
} from "../../store/actions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import { IoHeart } from "react-icons/io5";
import Filters from "../filters/filters";
import Pagination from "../Paginate/Paginate";

export const Campaing = () => {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catalogue = useSelector((state) => state.donationCatalogue);
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);

  const [currentPage, setCurrentPage] = useState(1);
  const [elementPerPage, setElementPerPage] = useState(9);
  const [order, setOrder] = useState("");
  const indexOfLastCatalogue = currentPage * elementPerPage;
  const indexOfFirstCatalogue = indexOfLastCatalogue - elementPerPage;

  const handleClick = (id) => {
    dispatch(getAnimalsById(id));
    navigate(`/campaign/${id}`);
  };

  const currentCatalogue = catalogue.slice(
    indexOfFirstCatalogue,
    indexOfLastCatalogue
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const img = require("../../imagenes/header-home.jpg");
  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="We have suffered an alarming loss of biodiversity in recent decades..."
      />
      <Filters setCurrentPage={setCurrentPage} setOrder={setOrder} />
      <StoreCampaingContainer>
        <FiltersContainer></FiltersContainer>
        <CardContainer>
          {currentCatalogue?.map((item) => {

            if(item.amount){
              
              return (
                <Card key={item._id}>
                  <Link to={`/campaign/`}>
                    <img src={item.image} />
                  </Link>
                  <CardLabel>
                    <h3>{item.title}</h3>
                    <p>$ {item.amount}</p>
                    {isAuthenticated && (
                      <button
                        className="donate-button"
                        onClick={() => {
                          // dispatch(setOpenModal(isModalOpen))
                          dispatch(setDonationCartElements(item));
                        }}
                      >
                        Donate
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
                    { isAuthenticated &&
                      <div
                        className={`icon-favorites ${item.selected}`}
                        onClick={() => dispatch(setFavorites(item))}
                      >
                        <IoHeart />
                      </div>
                    }
                  </CardLabel>
                </Card>
              );
            }else{<></>}
          })}
        </CardContainer>
      </StoreCampaingContainer>
      <Pagination
        elementPerPage={elementPerPage}
        element={catalogue.length}
        pagination={pagination}
      />
    </>
  );
};

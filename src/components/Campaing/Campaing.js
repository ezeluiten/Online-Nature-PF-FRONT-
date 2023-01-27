import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  StoreCampaingContainer,
  FiltersContainer,
  CardLabel,
  Card,
  CardContainer,
} from "./CampaingStyles";
import { getCatalogue } from "./../../store/actions/index";
import { setOpenModal, setDonationCartElements } from "../../store/actions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export const Campaing = () => {

  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
 
  const dispatch = useDispatch();
  const catalogue = useSelector((state) => state.donationCatalogue);
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);


  const img = require("../../imagenes/header-home.jpg");
  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="We have suffered an alarming loss of biodiversity in recent decades..."
      />

      <StoreCampaingContainer>
        <FiltersContainer>
          <div>
            <select id='order' onChange={(e) => handleName(e)}>
            <option>Alphabetical Order</option>
                        <option value = "ascendant">A - Z</option>
                        <option value = "descendant">Z - A</option>
            </select>
          </div>
        </FiltersContainer>
        <CardContainer>
            {catalogue?.map((item) => {
              return (
                <Card key={item._id}>
                    <Link to={`/campaign/`}>
                        <img src={item.image} />
                    </Link>
                  <CardLabel>
                    <h3>{item.title}</h3>
                    <p>$ {item.amount}</p>
                   { isAuthenticated &&
                     <button
                      className="donate-button"
                      onClick={() =>{
                        // dispatch(setOpenModal(isModalOpen))
                        dispatch(setDonationCartElements(item))
                      }}
                    >
                      Donate
                    </button>

                   }
                    {
                      !isAuthenticated && <button className={"donate-button"} onClick={()=>loginWithRedirect()}>log in</button>
                    }
                  </CardLabel>
                </Card>
              );
            })}          
        </CardContainer>
      </StoreCampaingContainer>
    </>
  );
};


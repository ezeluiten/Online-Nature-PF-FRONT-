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
import { getAnimals, getTrees } from "./../../store/actions";
import { setOpenModal } from "../../store/actions";
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import { useAuth0 } from "@auth0/auth0-react";

export const Campaing = () => {

  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();
  console.log("🚀 ~ file: Campaing.js:19 ~ Campaing ~ isAuthenticated", isAuthenticated)

  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals);
  const isModalOpen = useSelector((state) => state.isModalCashierOpen);
  const trees = useSelector((state) => state.trees);

  useEffect(() => {
    dispatch(getAnimals());
    dispatch(getTrees());
  }, [dispatch]);

  const img = require("../../imagenes/header-home.jpg");
  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="We have suffered an alarming loss of biodiversity in recent decades..."
      />

      <StoreCampaingContainer>
        <FiltersContainer></FiltersContainer>
        <CardContainer>
            {animals?.map((animal) => {
              return (
                <Card key={animal.id}>
                    <Link to={`/campaign/`}>
                        <img src={animal.image} />
                    </Link>
                  <CardLabel>
                    <h3>{animal.title}</h3>
                    <p>{animal.amount}</p>
                   { isAuthenticated &&
                     <button
                      className="donate-button"
                      onClick={() =>  dispatch(setOpenModal(isModalOpen))}
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

        <CardContainer>
          {trees?.map((trees) => {
              return (
                <Card key={trees.id}>
                    <Link to={`/campaign/`}>
                        <img src={trees.image} />
                    </Link>
                  <CardLabel>
                    <h3>{trees.title}</h3>
                    <p>{trees.amount}</p>
                    <button
                      className="donate-button"
                      onClick={() => dispatch(setOpenModal(isModalOpen))}
                    >
                      Donate
                    </button>
                  </CardLabel>
                </Card>
              );
            })}
        </CardContainer>
      </StoreCampaingContainer>
    </>
  );
};

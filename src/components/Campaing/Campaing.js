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

export const Campaing = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state) => state.animals);
  const isModalOpen = useSelector((state) => state.isModalOpen);
  console.log(
    "🚀 ~ file: Campaing.js:12 ~ Campaing ~ isModalOpen",
    isModalOpen
  );

  const trees = useSelector((state) => state.trees);
  console.log("🚀 ~ file: Campaing.js:10 ~ Campaing ~ animals", trees, animals);

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
                <Card key={animal.title}>
                    <Link to={`/campaign/`}>
                        <img src={animal.image} />
                    </Link>
                  <CardLabel>
                    <h3>{animal.title}</h3>
                    <p>{animal.amount}</p>
                    <button
                      className="donate-button"
                      onClick={() =>  dispatch(setOpenModal(isModalOpen))}
                    >
                      Donate
                    </button>
                  </CardLabel>
                </Card>
              );
            })}          
        </CardContainer>

        <CardContainer>
          {trees?.map((trees) => {
              return (
                <Card key={trees.title}>
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

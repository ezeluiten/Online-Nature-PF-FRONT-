import React from 'react'
import NavBar from '../NavBar/NavBar'

export const Home = () => {
  return (
    <>
      <NavBar />
      <Header
        imagen={img}
        text="
We have suffered an alarming loss of biodiversity in recent decades...
"
      />
      <CardsHome />
    </>
  );
};

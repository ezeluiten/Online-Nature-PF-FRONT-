import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StoreCampaingContainer, FiltersContainer,CardLabel, Card, CardContainer } from "./CampaingStyles"
import { getAnimals, getTrees } from "./../../store/actions"
import { setOpenModal } from "../../store/actions"

export const Campaing = () => {

    const dispatch = useDispatch();
    const animals = useSelector((state) => state.animals);
    const isModalOpen = useSelector((state) => state.isModalOpen);
    console.log("🚀 ~ file: Campaing.js:12 ~ Campaing ~ isModalOpen", isModalOpen)
    
    const trees = useSelector((state) => state.trees);
    console.log("🚀 ~ file: Campaing.js:10 ~ Campaing ~ animals", trees, animals)
    
  useEffect(() => {
    dispatch(getAnimals());
    dispatch(getTrees());
  }, [dispatch]);

  return (
    <StoreCampaingContainer>
        <FiltersContainer>
    
        </FiltersContainer>
        <CardContainer>
    {   
    
        animals?.map(animal=>{
            return (

                    <Card key={animal.title}>
                        <img src={animal.image}/>
                        <CardLabel>
                            <h3>{animal.title}</h3>
                            <p>{animal.amount}</p>
                            <button className='donate-button' onClick={()=>setOpenModal(isModalOpen)}>Donate</button>
                        </CardLabel>
                    </Card>
            )
        })
       
    }
        </CardContainer>
    </StoreCampaingContainer>
  )
}
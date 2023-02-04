import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FavoriteCard, ViewSelectedContainer, CardsContainer } from './ViewSelectedStyles'
import style from "./ViewSelected.module.css"
import Pagination from "../../Paginate/Paginate";
import { IoCloseCircleOutline } from "react-icons/io5"
import { setDonationCartElements, setFavorites } from '../../../store/actions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ViewSelected = ({isOpen}) => {

  let favorites = useSelector(state=>state.favorites)
  const storageFavorites = JSON.parse(localStorage.getItem("favorites"))
  
  const [currentPage, setCurrentPage] = useState(1);
  const [elementPerPage, setElementPerPage] = useState(6);
  const indexOfLastElement = currentPage * elementPerPage;
  const indexOfFirstElement = indexOfLastElement - elementPerPage;
  const dispatch = useDispatch()
  const currentFav =favorites.slice(indexOfFirstElement, indexOfLastElement);
  
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const {open, view} = isOpen
 
  if(open && view == "edit"){

    return (
      
      <ViewSelectedContainer>
        <CardsContainer>
              <h4 className="title-welcome">
                User panel:
              </h4>
              <p className="title-welcome">Change your Account information: </p>
            </CardsContainer>
      </ViewSelectedContainer>
    )
  }else if(open && view == "family"){

    return (
      <ViewSelectedContainer>
           <CardsContainer>
              <h2 className="title-welcome">
                Family members:
              </h2>
              <h4 className="title-welcome">Your favorite friend's panel: </h4>
            </CardsContainer>
      </ViewSelectedContainer>
    )
  }else if(open && view == "favorites"){

    return (
      <ViewSelectedContainer>
        <CardsContainer>
          <h2 className="title-welcome">
            Welcome to your favorite's space let's change the world together
          </h2>
          <h4 className="title-welcome">Your favorite friend's panel: </h4>
          <div className={style.containerMain}>
            {
              currentFav && currentFav.length > 0 ? 
              (
                currentFav?.map((favorite) => {
                
                return (
                  <>
                  <div className={style.addedCard}>
                    <FavoriteCard key={favorite._id} className={"card-container"}>
                      <div className={"image-container"}>
                        <img src={favorite.image_detail} alt={favorite.title} />
                        {<IoCloseCircleOutline className='button-delete-fav' onClick={() => dispatch(setFavorites(favorite))}/>} 
                      </div>
                      <div className="button-container">
                        <button className={"info-title"} onClick={()=>dispatch(setDonationCartElements(favorite))}>Donate now</button>
                      </div>
                      <div className={"info-container"}>
                        <p>{favorite.title}</p>
    
                        <p>{favorite.description.substr(0, 40) + "..."}</p>
                      </div>
                    </FavoriteCard>
                   </div>
                    
                  </>
                  );
                }
                )
              ) : (
                <div className={style.containerAdd}>
                  <p>!Add a little friend!</p>
                  <Link to='/campaign'>
                    <div className={style.emptyCardFavorite}>+</div>  
                  </Link>
                </div>
              )
            }
            {
              currentFav && currentFav.length >= 1 ? 
              (
                <div className={style.addedCard}> 
                      <Link to='/campaign'>
                          <div className={style.emptyCardFavorite}>+</div>  
                      </Link>
                </div>
              ):
              (
                <></>
              )
            }
          </div>
        </CardsContainer>
        <Pagination
          elementPerPage={elementPerPage}
          element={favorites.length}
          pagination={pagination}
        />
      </ViewSelectedContainer>
    );
  }else{
    return <></>
  }
}

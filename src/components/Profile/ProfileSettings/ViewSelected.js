import React from 'react'
import { useSelector } from 'react-redux'
import { FavoriteCard, ViewSelectedContainer, CardsContainer } from './ViewSelectedStyles'

export const ViewSelected = ({isOpen}) => {

  const favorites = useSelector(state=>state.favorites)
  console.log("🚀 ~ file: ViewSelected.js:7 ~ ViewSelected ~ favorites", isOpen.view, isOpen.open ,favorites)

  const {open, view} = isOpen

  if(open && view == "edit"){

    return (
      <ViewSelectedContainer>
          
      </ViewSelectedContainer>
    )
  }else if(open && view == "family"){

    return (
      <ViewSelectedContainer>
          
      </ViewSelectedContainer>
    )
  }else if(open && view == "favorites"){

    return (
      <ViewSelectedContainer>
        <CardsContainer>

          <h2 className="title-welcome">Welcome to your favorite's space let's change the world together</h2>
          <h4 className="title-welcome">Your favorite friend's panel: </h4>
          {
            favorites?.map(favorite => {
              console.log("🚀 ~ file: ViewSelected.js:41 ~ ViewSelected ~ favorite", favorite)
              return (<FavoriteCard key={favorite._id} className={"card-container"}>
                  <div className={"image-container"}>
                    <img src={favorite.image_detail} alt={favorite.title} />
                  </div>
                  <div className="button-container">
                    <button className={"info-title"}>Donate now</button>

                  </div>
                  <div className={"info-container"}>
                      <p>{favorite.title}</p>

                    <p>{favorite.description.substr(0,40)+ "..."}</p>
                  </div>
                </FavoriteCard>)
              
            })
          }
        </CardsContainer>
      </ViewSelectedContainer>
    )
  }else{
    return <></>
  }
}

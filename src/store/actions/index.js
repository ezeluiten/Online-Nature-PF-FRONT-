import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useSelector } from "react-redux";

export const  getAnimals = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/animals");
      console.log(response.data);
      dispatch({
        type: "GET_ANIMALS",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};


export const setFavorites = (item) => {
    return async function(dispatch, getState) { 
      const {favorites, donationCatalogue} = getState()
      if(item.selected){
        item.selected = ""
        const indexInFavorites = favorites.indexOf(item._id)
        const removingItemFromFavorites = favorites.splice(indexInFavorites, 1)
        const itemInCatalogue = donationCatalogue.find(element=> element._id == item._id)
        itemInCatalogue.selected = ""
        console.log("🚀 ~ file: index.js:30 ~ returnfunction ~ index", favorites, indexInFavorites)
      }else{
        const itemInCatalogue = donationCatalogue.find(element=> element._id == item._id)
        item.selected = "selected";
        itemInCatalogue.selected = "selected"
        favorites.push(item)
        console.log("🚀 ~ file: index.js:35 ~ returnfunction ~ favorites", favorites, item)

      }
      console.log("🚀 ~ file: index.js:38 ~ returnfunction ~ favorites", favorites,item)
      dispatch({
        type:"SET_FAVORITES",
        payload:favorites
      })
      dispatch({
        type:"GET_DONATION_PORTFOLIO",
        payload:[
          ...donationCatalogue
        ]
      })
      
    }
}

export const getAnimalsById = (id) => {
    return async function(dispatch) {
      try{
        const response = await axios.get(`/animals/${id}`);
        const data = response.data;
        dispatch({
          type: "GET_ANIMALS_BY_ID",
          payload: data
        })
      }catch(error){
        dispatch({
          type: 'ERROR',
          payload: error
        })
      }
    }
}

export const getTrees = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/trees");
      console.log(response.data);
      dispatch({
        type: "GET_TREES",
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};
export const getCatalogue = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/adoptionCatalogue");
      const data = await response.data.data
      dispatch({
        type: "GET_DONATION_PORTFOLIO",
        payload: data.allCatalogue
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};


export const getUserLoggedInfoToPay = (client) => {
  return async function (dispatch, getState) {
    console.log("🚀 ~ file: index.js:79 ~ getUserLoggedInfoToPay ~ client", client)

    dispatch({
      type:"PAYER_CLIENT_INFO",
      payload:client
      
    })

  
  }
}

export const initCheckOut = ()=>{
  return async function (dispatch, getState) {
    const {itemsCart:shoppingCart} = getState()
    const { payer } = getState();

      const {name, email} = payer
      console.log("🚀 ~ file: index.js:85 ~ clientInfo", name, email)
      console.log("🚀 ~ file: index.js:80 ~ shoppingCart", shoppingCart)
      axios
      .post("http://localhost:3001/api/v1/checkOutController", {
        items:shoppingCart.items,
        totalAmount:shoppingCart.totalAmount,
        payer:{
          name,
          email
        }
      },{headers:{
        "content-type":"application/json",
        "Access-Control-Allow-Origin":"*",
        "Authorization":process.env.REACT_APP_MERCADOPAGO_ACCESS_TOKEN
      }})
      .then((response) => {
        dispatch({

          type:"INIT_TRANSACTION",
          payload:response
        })
      });
      
    }

}

export const setDonationCartElements = ( newItem, action = "increase" ) => {
  return async function (dispatch, getState) {
    const { itemsCart } = getState()
    const { items } = itemsCart
    

    let newItemsCart = items && items.length ? [...items] : []
    const initialTotal = 0
    let newItemSelected = {...newItem}
    
    
    if( newItemsCart.length  && action == "increase" && newItemSelected ){
      let searchItemAndIncreaseQuantity = newItemsCart.find(item=>item._id == newItemSelected._id)
      if(searchItemAndIncreaseQuantity){
        searchItemAndIncreaseQuantity.quantity ++
      }else{
        newItemSelected.quantity = 1
        newItemsCart.push(newItemSelected)
      }


    }

    if(action == "increase" &&  newItemsCart.length == 0){
      newItemSelected.quantity = 1
      newItemsCart.push(newItemSelected)
    }
    
    if(newItemsCart.length && action == "decrease" && newItemSelected){
      let searchItemAndDecreaseQuantity = newItemsCart.find(item=>item._id == newItem._id)
      if(searchItemAndDecreaseQuantity.quantity >= 1){
        searchItemAndDecreaseQuantity.quantity -= 1
      }else{
        newItemsCart = newItemsCart.filter(item => item._id !== newItem._id)
      }
    }
    
    if(action == "delete" && newItemsCart.length) {
      newItemsCart = newItemsCart.filter(item => item._id !== newItem._id)
      console.log("🚀 ~ file: index.js:117 ~ cartFiltered", newItemsCart)
      
      // const { ["quantity"]: removedProperty, ...remainingObject } = cartFiltered;

      // const index = newItemsCart.indexOf({...remainingObject}) 
      // console.log("🚀 ~ file: index.js:122 ~ index", index)
      // const whetherIsNotCoincidence = index == -1 ? newItemsCart.filter(item => item._id !== newItem._id) : newItemsCart.splice(index, 1)
    }
    
    
    if(action == "getCartEmpty" && newItemsCart.length){
      newItemsCart.length = 0
    }
    
    

    let newTotalAmount = 0
    
    if(newItemsCart.length){
      
      newTotalAmount = newItemsCart.reduce((accumulator, currentItem)=>{
        const totalElement = currentItem.quantity * currentItem.amount
        return accumulator + totalElement
      }, initialTotal)
    }
    
    // itemsCart.items = [...newItemsCart]
    // itemsCart.totalAmount = newTotalAmount
    console.log("🚀 ~ file: index.js:140 ~ itemsCart", itemsCart)

    dispatch({
      type: "ITEMS_CART",
      payload: {
          items: newItemsCart,
          totalAmount: newTotalAmount
      }
    })
  };
}

export function sorting(params="descendant", catalogue){
 

   return async function (dispatch) {
    const sortAction = params
    console.log("🚀 ~ file: index.js:160 ~ sortAction", sortAction)
    const allCatalogue = catalogue
    const orderedAscendantCatalogue = allCatalogue.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (b.title < a.title) {
          return 1;
        }
        return 0;
    })
    console.log("🚀 ~ file: index.js:171 ~ orderedAscendantCatalogue ~ orderedAscendantCatalogue", orderedAscendantCatalogue)
 
    const orderedDescendantCatalogue = allCatalogue.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (b.title < a.title) {
          return 1;
        }
        return 0;
    })
    console.log("🚀 ~ file: index.js:182 ~ orderedDescendantCatalogue ~ orderedDescendantCatalogue", orderedDescendantCatalogue)
 
    const sorted = sortAction == "ascendant" ? orderedAscendantCatalogue : orderedDescendantCatalogue||[]
    console.log("🚀 ~ file: index.js:185 ~ sorted", sorted)
    dispatch({
      type: "SORT",
      payload: sorted
    })
  };
}

const currencyToNumber = (number)=>{
  const regex= /[^0-9.-]+/g
  const isNumber = typeof number == "number"
  if(isNumber) return number
  const reversingStringToReplaceLastComma = typeof number == "string" && number.split("").reverse().join("")
  const replace = reversingStringToReplaceLastComma && reversingStringToReplaceLastComma.replace(",", '.')
  const restoringStringToNormal = replace.split("").reverse().join("")
  const normalizedNumber = typeof restoringStringToNormal === "string" ? Number(restoringStringToNormal.replace(regex, "")): restoringStringToNormal
  return  normalizedNumber
}

export const setSettingsModalGate = (isOpen) => {
  const setIsOpen = !isOpen
  return async function (dispatch) {
    dispatch({
      type: "MODAL_SETTINGS",
      payload: setIsOpen
    })
  };

};
export const setOpenModal = (isOpen) => {
  const setIsOpen = !isOpen
  return async function (dispatch) {
    dispatch({
      type: "MODAL_GATE",
      payload: setIsOpen
    })
  };

};
export const setOpenModalNavBar = (isOpen) => {
  const setIsOpen = !isOpen
  return async function (dispatch) {
    dispatch({
      type: "MODAL_NAV",
      payload: setIsOpen
    })
  };

};


export const getTreesById = (id) => {
    return async function(dispatch) {
      try{
        const response = await axios.get(`/trees/${id}`);
        const data = response.data;
        dispatch({
          type: "GET_TREES_BY_ID",
          payload: data
        })
      }catch(error){
        dispatch({
          type: 'ERROR',
          payload: error
        })
      }
    }
}

export const removeItemCart = (_id) => ({
    type: "REMOVE_ITEM_CART", 
    payload: _id 
})
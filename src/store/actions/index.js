import axios from "axios";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export const  getAnimals = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/animals");
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

export const getDonations = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("/donations");
      const data = await response.data.data
      console.log("donations", data)
      
      const suma = data.donations.reduce((acc, obj) => acc + obj.amount, 0);

      const cuantityDonations = data.donations.length
      console.log(cuantityDonations)
      dispatch({
        type: "GET_DONATIONS",
        payload: {
          donations: suma,
          qDonations:cuantityDonations
        }
      });
    } catch (error) {
      dispatch({
        type: 'ERROR',
        payload: error
      })
    }
  };
};

export const setFavorites = (item, funct) => {
  return async function(dispatch, getState) { 

      let currentLocalStorageCatalogue =  JSON.parse(localStorage.getItem("catalogue"))
      let {favorites, donationCatalogue} = getState()

      if(currentLocalStorageCatalogue && currentLocalStorageCatalogue.length > 0){
        donationCatalogue = currentLocalStorageCatalogue
        favorites =[ ...currentLocalStorageCatalogue].filter(fav =>{
          return fav.selected == "selected"
        })

      }

      if(item.selected){
        item.selected = ""
        const indexInFavorites = favorites.filter(element => {
          return element._id !== item._id
        })
        const itemInCatalogue = donationCatalogue.find(element=> element._id == item._id)
        itemInCatalogue.selected = ""
        favorites = indexInFavorites
      }else{
        const itemInCatalogue = donationCatalogue.find(element=> element._id == item._id)
        item.selected = "selected";
        itemInCatalogue.selected = "selected"
        favorites.push(item)

      }

      const favoritesCopy = JSON.stringify([...favorites])
      const itemsCatalogue = JSON.stringify([...donationCatalogue])
      localStorage.removeItem("favorites")
      localStorage.setItem("favorites", favoritesCopy)
      localStorage.removeItem("catalogue")
      localStorage.setItem("catalogue", itemsCatalogue)
      currentLocalStorageCatalogue = JSON.parse(localStorage.getItem("catalogue"))

      dispatch({
        type:"ITEMS_LOCAL_STORAGE",
        payload:[
          ...currentLocalStorageCatalogue
        ]
      })
      dispatch({
        type:"SET_FAVORITES",
        payload:[
          ...favorites
        ]
      })
      dispatch({
        type:"GET_DONATION_PORTFOLIO",
        payload:[
          ...donationCatalogue
        ]
      })
      
    }
}


export const loginLoader = (callBackFunction)=>{
  return async function(dispatch, getState) {
    const { payer } = getState()
    const { isAuthenticated } = payer
    dispatch({
      type:"LOADING",
      payload:true
    })
    callBackFunction()
    if(isAuthenticated){
      
      dispatch({
        type:"LOADING",
        payload:false
      })
    }
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
    
    
    if( newItemsCart.length  && action === "increase" && newItemSelected ){
      let searchItemAndIncreaseQuantity = newItemsCart.find(item=>item._id === newItemSelected._id)
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
 
    const orderedDescendantCatalogue = allCatalogue.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (b.title < a.title) {
          return 1;
        }
        return 0;
    })
 
    const sorted = sortAction == "ascendant" ? orderedAscendantCatalogue : orderedDescendantCatalogue||[]
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

export const syncLoggedUserWithDb = (client) => {
  return async function (dispatch) {
    const clients = await axios.get("http://localhost:3001/api/v1/clients")
    
    const filteredLoggedClientInDB = clients.data.filter(clientInDb =>{
      return clientInDb.mail == client.email
    })
    const isLoggedClientInDB = filteredLoggedClientInDB && filteredLoggedClientInDB.length > 0

    if(!isLoggedClientInDB){

      const normalizedClient = {
        dni: client.dni || "",
        mail:client.email,
        name: client.name,
        phone:client.phone || 0
      }
      // const insertingNewClient = await axios.post("http://localhost:3001/api/v1/clients",{
      //   ...normalizedClient
      // })
      // dispatch({
      //   type: "MODAL_SETTINGS",
      //   payload: insertingNewClient
      // })
    }
    // else{
    //   return
    // }

  };

};

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

export const orderByAlpha = (data) => {
 
  return async (dispatch) => {
    try {
      let url = `/filterController/sort?type=${data}`;
      let json = await axios.get(url);
      return dispatch({
        type: "ORDER_BY_ALPHA",
        payload: json.data
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const orderBySpecies = (data) => {
  return async (dispatch) => {
    try {
      let url = `/filterController/category?type=${data}`;
      let json = await axios.get(url);
      return dispatch({
        type: "ORDER_BY_SPECIES",
        payload: json.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const postNewAnimal = (animal) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/adoptionCatalogue/animals", animal)
      dispatch({
        type: "POST_ANIMAL",
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

export const postNewTree = (tree) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("/adoptionCatalogue/trees", tree)
      dispatch({
        type: "POST_TREE",
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

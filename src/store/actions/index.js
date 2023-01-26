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
      console.log(response.data)
      dispatch({
        type: "GET_DONATION_PORTFOLIO",
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

export const setDonationCartElements = ( newItem, action = "increase" ) => {
  return async function (dispatch, getState) {
    const { itemsCart } = getState()
    const { items } = itemsCart
    console.log("🚀 ~ file: index.js:79 ~ setDonationCartElements ~ newItem, action ", action , newItem)
    
    console.log("🚀 ~ file: index.js:81 ~ itemsCart", itemsCart)

    let newItemsCart = items && items.length ? [...items] : []
    console.log("🚀 ~ file: index.js:83 ~ newItemsCart", newItemsCart)
    const initialTotal = 0
    let newItemSelected = {...newItem}
    
    
    if( newItemsCart.length  && action == "increase" && newItemSelected ){
      let searchItemAndIncreaseQuantity = newItemsCart.find(item=>item._id == newItemSelected._id)
      console.log("🚀 ~ file: index.js:91 ~ searchItemAndIncreaseQuantity", searchItemAndIncreaseQuantity)
      if(searchItemAndIncreaseQuantity){
        searchItemAndIncreaseQuantity.quantity ++
      }else{
        newItemSelected.quantity = 1
        console.log("🚀 ~ file: index.js:96 ~ newItemSelected", newItemSelected)
        newItemsCart.push(newItemSelected)
      }

      console.log("🚀 ~ file: index.js:101 ~ searchItemAndIncreaseQuantity", searchItemAndIncreaseQuantity)

    }
    if(newItemsCart.length && action == "decrease" && newItemSelected){
      let searchItemAndDecreaseQuantity = newItemsCart.find(item=>item._id == newItem._id)
      console.log("🚀 ~ file: index.js:106 ~ searchItemAndIncreaseQuantity", searchItemAndDecreaseQuantity)
      if(searchItemAndDecreaseQuantity.quantity > 1){
        searchItemAndDecreaseQuantity.quantity -= 1
      }else{
        const index = newItemsCart.indexOf(searchItemAndDecreaseQuantity) 
        const erasingItem = newItemsCart.splice(index, 1)
      }
      console.log("🚀 ~ file: index.js:116 ~ searchItemAndIncreaseQuantity", searchItemAndDecreaseQuantity)
    }
    
    if(action == "increase" &&  newItemsCart.length == 0){
      console.log("🚀 ~ file: index.js:121 ~ newItemsCart")
      newItemSelected.quantity = 1
      newItemsCart.push(newItemSelected)
    }
    console.log("🚀 ~ file: index.js:125 ~ newItemsCart", newItemsCart)

    if(action == "delete" && newItemsCart.length) {
      let cartFiltered = newItemsCart.find(item=>item._id == newItem._id)
      console.log("cart filtered",cartFiltered);
      cartFiltered.quantity = 0

      const { ["quantity"]: removedProperty, ...remainingObject } = cartFiltered;

      const index = newItemsCart.indexOf({...remainingObject}) 
      console.log("index", index)
      const erasingItem = newItemsCart.splice(index, 1)
      console.log("erasingItem", erasingItem)

    }

    if(action == "getCartEmpty" && newItemsCart.length){
        newItemsCart.length = 0
    }
    


    let newTotalAmount = 0
    console.log("🚀 ~ file: index.js:128 ~ newTotalAmount", newTotalAmount)
    
    if(newItemsCart.length > 1){
      
      newTotalAmount = newItemsCart.reduce((accumulator, currentItem)=>{
        console.log("primera vez")
        console.log("acumulador", accumulator, currentItem)
        const newAmount = currencyToNumber(currentItem.amount)
        console.log("🚀 ~ file: index.js:131 ~ newItemsCart.reduce ~ quantity, amount", currentItem.quantity,currentItem.amount)
        const totalElement = currentItem.quantity * newAmount
        console.log("🚀 ~ file: index.js:135 ~ newItemsCart.reduce ~ totalElement", totalElement)
        return accumulator + totalElement
      }, initialTotal)
      console.log("🚀 ~ file: index.js:142 ~ newTotalAmount=newItemsCart.reduce ~ newTotalAmount", newTotalAmount)
    }else{
      const newAmount = newItemsCart[0] && newItemsCart[0].amount ? currencyToNumber( newItemsCart[0].amount  ) : 0

      newTotalAmount = newItemsCart && newItemsCart[0].quantity * newAmount
      console.log("🚀 ~ file: index.js:145 ~ newTotalAmount", newTotalAmount)
    }
    
    console.log("🚀 ~ file: index.js:148 ~ newTotalAmount", newTotalAmount)
    
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
const initialState = {
  animals: [],
  allanimals: [],
  trees: [],
  animalDetail: {},
  treeDetail: {},
  isModalCashierOpen: false,
  isModalNavBarOpen: false,
  donationCatalogue: [],
  itemsCart: {
    items: [],
    totalAmount: 0,
  },
  payer: {},
  transactionInfo: {},
  isOpenSettingsModal: false,
  favorites: [],
  loading: false,
  storageCatalogue: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ANIMALS":
      return {
        ...state,
        animals: action.payload,
        allanimals: action.payload,
      };
    case "GET_ANIMALS_BY_ID":
      return {
        ...state,
        animalDetail: action.payload,
      };
    case "GET_TREES":
      return {
        ...state,
        trees: action.payload,
      };
    case "GET_ANIMALS_BY_ID":
      return {
        ...state,
        treeDetail: action.payload,
      };
    case "MODAL_GATE":
      return {
        ...state,
        isModalCashierOpen: action.payload,
      };
    case "MODAL_NAV":
      return {
        ...state,
        isModalNavBar: action.payload,
      };
    case "GET_DONATION_PORTFOLIO":
      return {
        ...state,
        donationCatalogue: action.payload,
      };
    case "ITEMS_CART":
      return {
        ...state,
        itemsCart: action.payload,
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        itemsCart: state.itemsCart.items.filter(
          (el) => el._id !== action.payload
        ),
      };
    case "PAYER_CLIENT_INFO":
      return {
        ...state,
        payer: action.payload,
      };
    case "MODAL_SETTINGS":
      return {
        ...state,
        isOpenSettingsModal: action.payload,
      };
    case "SET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    case "GET_ANIMALS_BY_ID":
      return {
        ...state,
        animalDetail: action.payload,
      };
    case "GET_TREES":
      return {
        ...state,
        trees: action.payload,
      };
    case "GET_TREES_BY_ID":
      return {
        ...state,
        treeDetail: action.payload,
      };
    case "MODAL_GATE":
      return {
        ...state,
        isModalCashierOpen: action.payload,
      };
    case "MODAL_NAV":
      return {
        ...state,
        isModalNavBar: action.payload,
      };
    case "ITEMS_CART":
      return {
        ...state,
        itemsCart: action.payload,
      };
    case "REMOVE_ITEM_CART":
      return {
        ...state,
        itemsCart: state.itemsCart.items.filter(
          (el) => el._id !== action.payload
        ),
      };
    case "PAYER_CLIENT_INFO":
      return {
        ...state,
        payer: action.payload,
      };
    case "INIT_TRANSACTION":
      return {
        ...state,
        transactionInfo: action.payload,
      };
    case "ORDER_BY_ALPHA":
      return {
        ...state,
        donationCatalogue: action.payload.data.result[0],
      };
    case "ORDER_BY_SPECIES":
      return {
        ...state,
        donationCatalogue: action.payload.data.result[0],
      };
    case "LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "ITEMS_LOCAL_STORAGE":
      return {
        ...state,
        storageCatalogue: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;

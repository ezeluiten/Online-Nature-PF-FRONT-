const initialState = {
  animals: [],
  Catalogue: [],
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
        donationCatalogue: action.payload.data.allCatalogue,
      };
    case "ITEMS_CART":
      console.log(
        "🚀 ~ file: index.js:54 ~ rootReducer ~ action.payload",
        action.payload
      );

      return {
        ...state,
        itemsCart: action.payload,
      };
    case "GET_NAME":
      return {
        ...state,
        animals: action.payload,
      };
    case "ORDER_ANIMAL_DESCENDANT":
      return {
        ...state,
        catalogue: (state.categories.sort((a, b) => { return a.tittle - b.tittle }).reverse()).map(e => e),
      };
    case "ORDER_ANIMAL_ASCENDANT":
      return {
        ...state,
        catalogue: (state.categories.sort((a, b) => { return a.tittle - b.tittle })).map(e => e),
      };

    default:
      return { ...state,
      animals: action.payload };
  }
};

export default rootReducer;

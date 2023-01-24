const initialState = {
    animals: [],
    allanimals:[],
    trees:[],
    animalDetail: {},
    treeDetail: {},
    isModalCashierOpen:false,
    isModalNavBarOpen:false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ANIMALS":
        return {
          ...state,
          animals: action.payload,
          allanimals: action.payload,
          
        };
        case 'GET_ANIMALS_BY_ID':
          return {
                ...state,
                animalDetail: action.payload
        }
        case "GET_TREES":
            return {
                ...state,
                trees: action.payload,
          }
          case 'GET_ANIMALS_BY_ID':
            return {
              ...state,
              treeDetail: action.payload
            }
            case "MODAL_GATE":
              
              return {
            ...state,
            isModalCashierOpen: action.payload
          }
            case "MODAL_NAV":
              console.log("🚀 ~ file: index.js:28 ~ rootReducer ~ action.payload", action.payload)
              
              return {
            ...state,
            isModalNavBar: action.payload
          }
      default:
        return { ...state };
    }
};
  
export default rootReducer;
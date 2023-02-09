const initialState = {
  animals: [],
  allanimals: [],
  trees: [],
  donations: [],
  detail: {},
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
  favorites:[],
  loading:false,
  storageCatalogue:[],
  id:"",
  post_animal:[],
  post_tree:[],
  tickets:[],
  detail:{},
  clientLogged:{},
  allCatalogue: [],
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
    case "GET_DONATIONS":
      return {
        ...state,
        donations: action.payload,
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
    case "GET_DONATION_PORTFOLIO":
      return {
        ...state,
        donationCatalogue: action.payload,
        allCatalogue: action.payload,
      };
    case "ITEMS_CART":
      return {
        ...state,
        itemsCart: action.payload,
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
    case 'POST_ANIMAL':
        return {
           ...state,
           post_animal: action.payload
    }
    case 'POST_TREE':
          return {
             ...state,
             post_tree: action.payload
    }
    case 'GET_ALL_TICKETS':
          return {
             ...state,
             tickets: action.payload
    }
    case "GET_DETAIL":
      return {
        ...state,
        detail: state.donationCatalogue.find(
          (element) => element._id === action.payload
        ),
      };
    case "RESET_DETAIL":
      return {
        ...state,
        detail: {},
      };
    case "UPDATE_ITEMS":
      return {
        ...state,
        donationCatalogue: action.payload,
      }
    case "SEND_ID":
      return {
        ...state,
        id : action.payload
      }

    case "CLIENT_LOGGED":
      return {
        ...state,
        clientLogged: {},
      };
      case "FETCH_ITEMS":
        return {
          ...state,
          donationCatalogue: action.payload
        };
        case "ORDER_NAME_MENOR":
          return {
            ...state,
            donationCatalogue: state.donationCatalogue
              .sort((a, b) => {
                if (a.title < b.title) {
                  return -1;
                } else if (a.title > b.title) {
                  return 1;
                } else {
                  return 0;
                }
              })
              .reverse(),
          };

          case "ORDER_NAME_MAYOR":
      return {
        ...state,
        donationCatalogue: state.donationCatalogue.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          } else if (a.title > b.title) {
            return 1;
          } else {
            return 0;
          }
        }),
      };

      case "FILTER_TYPE": {
        if (action.payload === "All") {
          return {
            ...state,
            donationCatalogue: state.allCatalogue,
          };
        } else {
          return {
            ...state,
            donationCatalogue: state.allCatalogue?.filter(
              (element) => element.type === action.payload
            ),
          };
        }
      }
    default:
      return { ...state };
  }
};

export default rootReducer;

const initialState = {
    animals: [],
    allanimals:[],
    trees:[],
    isModalOpen:false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_ANIMALS":
        return {
          ...state,
          animals: action.payload,
          allanimals: action.payload,
          
        };
      case "GET_TREES":
          return {
            ...state,
            trees: action.payload,
          }
      case "MODAL_GATE":
          return {
            ...state,
            isModalOpen: action.payload
          }
      default:
        return { ...state };
    }
};
  
export default rootReducer;
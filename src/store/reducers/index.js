const initialState = {
    animals: [],
    allanimals:[],
    trees:[]
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
      default:
        return { ...state };
    }
};
  
export default rootReducer;
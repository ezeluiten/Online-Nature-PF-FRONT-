import axios from "axios";

export const  getAnimals = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/animals");
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

export const getTrees = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/api/v1/trees");
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

  
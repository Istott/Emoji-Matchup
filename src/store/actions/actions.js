import axios from "axios";

export const fetchJackson = () => {
  return dispatch => {
    dispatch({ type: "FETCH_DATA_START" });
    axios
      .get("https://rickandmortyapi.com/api/character/404")
      .then(res => {
        console.log(res)
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: res.data });
      })
      .catch(err => console.log(err.response));
  };
};


/////////////////////////////////

// Action Suite
// 1. action types
// 2. action creators
// 3. actions (action objects)

export const REMOVE_FEATURE = "REMOVE_FEATURE";
// action creators are just functions that "create" (aka return) actions
export const removeFeature = (feature) => {
  console.log("action creator called");
  return { type: REMOVE_FEATURE, 
    payload: feature}
};

export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = newFeature => {
  return { type: ADD_FEATURE, 
    payload: newFeature 
  };
};
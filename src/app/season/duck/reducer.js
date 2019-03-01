// animelist/duck/reducer.js
// ...
import types from "./types";

const initialState = {
  list: []
};

const seasonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_ANIME_LIST_DATA:
      return {
        ...state,
        list: action.payload
      }

    default: return state;
  }
};

export default seasonReducer;

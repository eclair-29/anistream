// animelist/duck/reducer.js
// ...
import types from "./types";

const initialState = {
  seasonAnime: []
};

const seasonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_CURRENT_ANIME_SEASON:
      return {
        ...state,
        seasonAnime: action.payload
      }

    default: return state;
  }
};

export default seasonReducer;

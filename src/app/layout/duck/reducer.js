// common/duck/reducer.js
// ...
import types from "./types";

const initialState = {
  isIn: false
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_SLIDING_POPUP:
      return {
        ...state,
        isIn: true
      }

    case types.HIDE_SLIDING_POPUP:
      return {
        ...state,
        isIn: false
      }

    default: return state;
  }
};

export default commonReducer;

import { combineReducers } from "redux";
import commonReducer from "./app/common/duck";
import homeReducer from "./app/home/duck";

const rootReducer = combineReducers({
  common: commonReducer,
  home: homeReducer
});

export default rootReducer;

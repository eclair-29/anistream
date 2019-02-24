import { combineReducers } from "redux";
import commonReducer from "./app/common/duck";

const rootReducer = combineReducers({
  common: commonReducer
});

export default rootReducer;

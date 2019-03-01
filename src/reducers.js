import { combineReducers } from "redux";
import commonReducer from "./app/layout/duck";
import homeReducer from "./app/home/duck";
import seasonReducer from "./app/season/duck";
import categoriesReducer from "./app/categories/duck";

const rootReducer = combineReducers({
  common: commonReducer,
  home: homeReducer,
  season: seasonReducer,
  categories: categoriesReducer
});

export default rootReducer;

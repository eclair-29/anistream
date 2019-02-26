import { combineReducers } from "redux";
import commonReducer from "./app/layout/duck";
import homeReducer from "./app/home/duck";
import animeListReducer from "./app/animelist/duck";
import categoriesReducer from "./app/categories/duck";

const rootReducer = combineReducers({
  common: commonReducer,
  home: homeReducer,
  animeList: animeListReducer,
  categories: categoriesReducer
});

export default rootReducer;

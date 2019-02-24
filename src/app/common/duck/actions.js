// common/duck/actions.js
// ...
import types from "./types";

const showSearchModule = () => {
  return { type: types.SHOW_SEARCH_MODULE };
};

const hideSearchModule = () => {
  return { type: types.HIDE_SEARCH_MODULE };
};

export default {
  showSearchModule,
  hideSearchModule
};

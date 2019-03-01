// animelist/duck/actions.js
// ...
import types from "./types";

const requestAnimeListData = data => {
  return {
    type: types.REQUEST_ANIME_LIST_DATA,
    payload: data
  }
};

export default {
  requestAnimeListData
};

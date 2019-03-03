// animelist/duck/actions.js
// ...
import types from "./types";

const requestCurrentAnimeSeason = data => {
  return {
    type: types.REQUEST_CURRENT_ANIME_SEASON,
    payload: data
  }
};

export default {
  requestCurrentAnimeSeason
};

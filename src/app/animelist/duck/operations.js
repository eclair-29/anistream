// animelist/duck/operations.js
// ...
import creators from "./actions";
import axios from "axios";
import { kitsuAPI } from "../../../utils/config/kitsu";

// Action Definition
const requestAnimeListDataAction = creators.requestAnimeListData;

const fetchAnimeList = () => {
  const endpoint = "/anime"

  return dispatch => {
    axios.get(`${kitsuAPI.URL}${endpoint}`, kitsuAPI.credentials)
      .then(res => dispatch(requestAnimeListDataAction(res.data.data)));
  }
};

export default {
  fetchAnimeList
};

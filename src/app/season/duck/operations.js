// animelist/duck/operations.js
// ...
import creators from "./actions";
import axios from "axios";
import { kitsuAPI } from "../../../utils/config/kitsu";

// Action Definition
const requestCurrentAnimeSeasonAction = creators.requestCurrentAnimeSeason;

const fetchCurrentAnimeSeason = (season, year) => {
  const endpoint = "/anime";
  const filteredSeason = `filter%5Bseason%5D=${season}`;
  const filteredYear = `filter%5Bseason_year%5D=${year}`;
  const pageLimit = "page%5Blimit%5D=18"

  return dispatch => {
    axios.get(
      `${kitsuAPI.URL}${endpoint}?${filteredSeason}&${filteredYear}&${pageLimit}`,
      kitsuAPI.credentials
    )
      .then(res => dispatch(requestCurrentAnimeSeasonAction(res.data.data)));
  }
};

export default {
  fetchCurrentAnimeSeason
};

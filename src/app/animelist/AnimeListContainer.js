import { connect } from "react-redux";
import { animeListOperations } from "./duck"
import AnimeList from "./AnimeList";

const mapStateToProps = state => {
  // array of anime data from the kitsu API
  return {
    animeList: state.animeList.list
  }
};

// ...
// ANIME LIST REALTED ACTIONS:
// _fetchAnimeList: get all anime from the kitsu API
// ...
const mapDispatchToProps = dispatch => {
  return {
    fetchAnimeList: () => dispatch(animeListOperations.fetchAnimeList())
  }
};

const AnimeListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimeList);

export default AnimeListContainer;

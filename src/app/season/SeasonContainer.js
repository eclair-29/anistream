import { connect } from "react-redux";
import { seasonOperations } from "./duck"
import Season from "./Season";

const mapStateToProps = state => {
  // array of anime data from the kitsu API
  return {
    animeList: state.season.list
  }
};

// ...
// ANIME LIST REALTED ACTIONS:
// _fetchAnimeList: get all anime from the kitsu API
// ...
const mapDispatchToProps = dispatch => {
  return {
    fetchAnimeList: () => dispatch(seasonOperations.fetchAnimeList())
  }
};

const SeasonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Season);

export default SeasonContainer;

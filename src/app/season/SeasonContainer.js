import { connect } from "react-redux";
import { seasonOperations } from "./duck"
import Season from "./Season";

const mapStateToProps = state => {
  // array of current anime season from the kitsu API
  return {
    seasonAnime: state.season.seasonAnime
  }
};

// ...
// SEASON ANIME RELATED ACTIONS:
// _fetchCurrentAnimeSeason: get all anime from the current season
// ...
const mapDispatchToProps = dispatch => {
  return {
    fetchCurrentAnimeSeason: (season, year) => {
      dispatch(seasonOperations.fetchCurrentAnimeSeason(season, year))
    }
  }
};

const SeasonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Season);

export default SeasonContainer;

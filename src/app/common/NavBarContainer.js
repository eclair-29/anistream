import { connect } from "react-redux";
import NavBar from "./NavBar";
import { commonOperations } from "./duck";

// Fetches all the relevant initial state values related to the NavBar Component
const mapStateToProps = state => {
  return {
    isIn: state.common.isIn
  }
};

// NAVBAR RELATED ACTIONS:
// _SHOW_SEARCH_MODULE: toggle the search module pane hwne search button is cliecked
const mapDispatchToProps = dispatch => {
  return {
    showSearchModule: () => dispatch(commonOperations.showSearchModule()),
    hideSearchModule: () => dispatch(commonOperations.hideSearchModule())
  }
};

const NavBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);

export default NavBarContainer;

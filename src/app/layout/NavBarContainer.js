import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar";
import { commonOperations } from "./duck";

// Fetches all the relevant initial state values related to the NavBar Component
const mapStateToProps = state => {
  return {
    isIn: state.common.isIn
  }
};

// ...
// NAVBAR RELATED ACTIONS:
// _SHOW_SLIDING_POPUP: toggle on the search module pane when search button is cliecked
// ...
const mapDispatchToProps = dispatch => {
  return {
    showSlidingPopup: () => dispatch(commonOperations.showSlidingPopup()),
  }
};

const NavBarContainer = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(NavBar);

export default NavBarContainer;

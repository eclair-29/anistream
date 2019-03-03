import { connect } from "react-redux";
import SlidingPopup from "./SlidingPopup";
import { commonOperations } from "./duck";

// ...
// SLIDING POPUP RELATED ACTIONS:
// _HIDE_SLIDING_POPUP: toggle off the module pane when backdrop is clicked
// ...
const mapDispatchToProps = dispatch => {
  return {
    hideSlidingPopup: () => dispatch(commonOperations.hideSlidingPopup()),
  }
};

const SlidingPopupContainer = connect(
  null,
  mapDispatchToProps
)(SlidingPopup);

export default SlidingPopupContainer;

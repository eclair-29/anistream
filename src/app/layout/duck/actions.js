// common/duck/actions.js
// ...
import types from "./types";

const showSlidingPopup = () => {
  return { type: types.SHOW_SLIDING_POPUP };
};

const hideSlidingPopup = () => {
  return { type: types.HIDE_SLIDING_POPUP };
};

export default {
  showSlidingPopup,
  hideSlidingPopup
};

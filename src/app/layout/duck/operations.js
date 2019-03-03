// common/duck/operations.js
// ...
import creators from "./actions";

// Action Definition
const showSlidingPopup = creators.showSlidingPopup;
const hideSlidingPopup = creators.hideSlidingPopup;

export default {
  showSlidingPopup,
  hideSlidingPopup
};

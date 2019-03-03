import React from "react";
import { Transition } from "react-transition-group";
import PropTypes from "prop-types";

const SlidingPopup = ({ children, isIn, hideSlidingPopup }) => {
  // ...
  // HIDE SLIDING POPUP ON BACKDROP CLICK
  // ...
  const hideOnClick = e => {
    if (e.target.className === "backdrop backdrop-entered") hideSlidingPopup();
  };

  // ...
  // SLIDING POPUP LAYOUT
  // _module like modal that pops from the right side of the document
  // _backdrop and transition ready
  // ...
  return (
    <div className="sliding-popup">
      <Transition timeout={100} in={isIn} appear mountOnEnter>
        {status => <div className={`backdrop backdrop-${status}`} onClick={hideOnClick} />}
      </Transition>

      <Transition timeout={100} in={isIn} appear>
        {status => <div className={`sliding-module sliding-${status}`}>{children}</div>}
      </Transition>
    </div>
  );
}

SlidingPopup.propTypes = {
  isIn: PropTypes.bool.isRequired,
  hideSlidingPopup: PropTypes.func.isRequired,
};

export default SlidingPopup;

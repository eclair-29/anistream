import React from "react";
import PropTypes from "prop-types";

const Ads = (props) => {
  // ...
  // ADS PLACEHOLDER
  // _a fallback conatainer in case the requested ads is not loaded
  // ...
  return <div className={`ads ${props.className}`} />;
}

Ads.propTypes = {
  className: PropTypes.node.isRequired
};

export default Ads;

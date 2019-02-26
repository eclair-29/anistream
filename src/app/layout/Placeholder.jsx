import React from "react";
import PropTypes from "prop-types";

const Placeholder = ({ children }) => {
  return (
    <div className="placeholder">
      <h1>Sorry the {children} page is under construction...</h1>
      <p>Thank you for being patient, We are doing some work on the page and will be back soon</p>
    </div>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node.isRequired
};

export default Placeholder;

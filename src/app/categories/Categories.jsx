import React, { Component } from "react";
import common from "../../utils/config/common";

class Categories extends Component {
  componentDidMount() {
    document.title = `Categories | ${common.docTitle}`;
  }

  render() {
    return (
      <div className="categories">

      </div>
    );
  }
}

export default Categories;

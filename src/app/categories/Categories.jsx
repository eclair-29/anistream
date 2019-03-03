import React, { Component } from "react";
import common from "../../utils/config/common";

class Categories extends Component {
  componentDidMount() {
    document.title = `Categories | ${common.docTitle}`;
  }

  render() {
    return (
      <div className="categories">
        {/*
          ...
          CATEGORIES PAGE HEADER
          _title of the categories page
          ...
        */}
        <div className="categories-header">
          <h1 className="title">Categories</h1>
        </div>
      </div>
    );
  }
}

export default Categories;

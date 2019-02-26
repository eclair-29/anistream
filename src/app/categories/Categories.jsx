import React, { Component } from "react";
import { Placeholder } from "../layout";

class Categories extends Component {
  componentDidMount() {
    document.title = `Categories | ${document.title}`;
  }

  render() {
    return (
      <div className="categories">
        <Placeholder>Categories</Placeholder>
      </div>
    );
  }
}

export default Categories;

import React, { Component } from "react";

class Categories extends Component {
  componentDidMount() {
    document.title = `Categories | ${document.title}`;
  }

  render() {
    return (
      <div className="categories"><h1>Categories Page</h1></div>
    );
  }
}

export default Categories;

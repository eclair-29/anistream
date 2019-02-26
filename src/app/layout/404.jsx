import React, { Component } from "react";

class Page404 extends Component {
  componentDidMount() {
    document.title = `Page not found (Error 404) | ${document.title}`
  }

  render() {
    return (
      <div className="page-404"><h1>Error 404: Page Not Found :[</h1></div>
    );
  }
}

export default Page404;

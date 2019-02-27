import React, { Component } from "react";
import { ReactComponent as Error404 } from "../../utils/assets/404.svg";

class Page404 extends Component {
  componentDidMount() {
    document.title = "Page not found (Error 404) | Animazing"
  }

  render() {
    return (
      <div className="page-404">
        {/*
          ...
          PAGE 404 LAYOUT
          _basic page 404 layout
          ...
        */}
        <Error404 />
      </div>
    );
  }
}

export default Page404;

import React, { Component } from "react";
import common from "../../utils/config/common";

class Home extends Component {
  componentDidMount() {
    document.title = common.docTitle;
  }

  render() {
    return (
      <div className="home">

      </div>
    );
  }
}

export default Home;

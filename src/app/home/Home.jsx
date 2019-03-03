import React, { Component } from "react";
import common from "../../utils/config/common";

class Home extends Component {
  componentDidMount() {
    document.title = common.docTitle;
  }

  render() {
    return (
      <div className="home">
        {/*
          ...
          HOME PAGE HEADER
          _title of the recently released anime
          ...
        */}
        <div className="home-header">
          <h1 className="title">Recently Released Anime</h1>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { Placeholder } from "../layout"

class Home extends Component {
  componentDidMount() {
    document.title = "Animazing";
  }

  render() {
    return (
      <div className="home">
        <Placeholder>Home</Placeholder>
      </div>
    );
  }
}

export default Home;

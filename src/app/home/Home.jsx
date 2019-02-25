import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    document.title = "Anistream";
  }

  render() {
    return (
      <div className="home"><h1>Home Page</h1></div>
    );
  }
}

export default Home;

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { NavBar, Main } from "./common";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;

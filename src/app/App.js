import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { NavBar, Main } from "./common";
import { Home } from "./home";
import { AnimeList } from "./animelist";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 
            ...
            HEADER/NAV LAYOUT
            _main header/navigation for this application
            _holds base links and global search controls
            ...
          */}
          <NavBar />

          {/* 
            ...
            MAIN CONTAINER
            _holds content for each views/pages
            _with react-router holder
            ...
          */}
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/anime-list" component={AnimeList} />
            </Switch>
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;

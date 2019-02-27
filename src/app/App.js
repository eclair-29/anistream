import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { NavBar, Main, Footer, Page404 } from "./layout";
import { Home } from "./home";
import { AnimeList } from "./animelist";
import { Categories } from "./categories";

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
            _includes page 404 route as a fallbac
            ...
          */}
          <Main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/anime-list" component={AnimeList} />
              <Route path="/categories" component={Categories} />
              <Route component={Page404} />
            </Switch>

            {/*
              ...
              FOOTER LAYOUT
              _holds footer layout (from: ./layout/Footer.jsx)
              ...
            */}
            {/* <Footer /> */}
          </Main>
        </div>
      </Router>
    );
  }
}

export default App;

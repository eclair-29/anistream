import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Transition } from "react-transition-group";
import { Search } from "react-feather";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const NavBar = ({
  isIn,
  showSearchModule,
  hideSearchModule
}) => {
  const searchBtn = (
    <Button className="icon-btn" onClick={() => showSearchModule()}>
      <Search size="18px" color="#f9f9f9" />
    </Button>
  );

  const hideOnClick = e => {
    if (e.target.className === "backdrop backdrop-entered") hideSearchModule();
  };

  return (
    <header>
      {/* 
        ...
        MAIN HEADER:
        _holds the Nav Bar which includes the branding/logo, core links and a search button
        ...
      */}
      <nav className="navbar">
        <Link to="/" className="brand">animazing</Link>

        <ul className="menu">
          <li><NavLink to="/" exact activeClassName="selected">Home</NavLink></li>
          <li><NavLink to="/anime-list" activeClassName="selected">Anime List</NavLink></li>
          <li><NavLink to="/categories" activeClassName="selected">Categories</NavLink></li>
          <li>{searchBtn}</li>
        </ul>
      </nav>

      {/* 
        ...
        SEARCH MODULE:
        _search popup module with text input
        _auto suggest a list of anime depending on the query
        _backdrop and transition ready
        ...
      */}
      <Transition timeout={100} in={isIn} appear mountOnEnter>
        {status => <div className={`backdrop backdrop-${status}`} onClick={hideOnClick} />}
      </Transition>

      <Transition timeout={100} in={isIn} appear>
        {status => <div className={`search-module search-${status}`} />}
      </Transition>
    </header>
  );
}

NavBar.propTypes = {
  isIn: PropTypes.bool.isRequired,
  showSearchModule: PropTypes.func.isRequired,
  hideSearchModule: PropTypes.func.isRequired
};

export default NavBar;

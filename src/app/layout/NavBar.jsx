import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "react-feather";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import { SlidingPopup } from "./"

const NavBar = ({ isIn, showSlidingPopup }) => {
  const searchBtn = (
    <Button className="icon-btn" onClick={() => showSlidingPopup()} title="Search" >
      <Search size="18px" color="#f9f9f9" />
    </Button>
  );

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
          <li><NavLink to="/season" activeClassName="selected">Season</NavLink></li>
          <li><NavLink to="/categories" activeClassName="selected">Categories</NavLink></li>
          <li><NavLink to="/get-app" activeClassName="selected">Get App</NavLink></li>
          <li>{searchBtn}</li>
        </ul>
      </nav>

      {/* 
        ...
        SEARCH MODULE:
        _search popup module (from: SlidingPopup.jsx) with text input
        _auto suggest a list of anime depending on the query
        ...
      */}
      <SlidingPopup isIn={isIn} />
    </header>
  );
}

NavBar.propTypes = {
  isIn: PropTypes.bool.isRequired,
  showSlidingPopup: PropTypes.func.isRequired,
};

export default NavBar;

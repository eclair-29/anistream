import React, { Component } from "react";
import PropTypes from "prop-types";
import common from "../../utils/config/common";
import { Sliders } from "react-feather";
import { Button } from "reactstrap";

class Season extends Component {
  componentDidMount() {
    const { season, year, docTitle } = common;

    document.title = `Anime List | ${docTitle}`;
    this.props.fetchCurrentAnimeSeason(season, year);
  }

  render() {
    console.log(this.props.seasonAnime);
    const { season, year } = common;

    return (
      <div className="season">
        {/*
          ...
          SEASON PAGE HEADER
          _title of the current season and year
          _filter button
          ...
        */}
        <div className="season-header">
          <h1 className="title">Showing Animes from {season} Season {year}</h1>

          <Button className="icon-btn" title="Filters">
            <Sliders size="18px" color="#f9f9f9" />
          </Button>
        </div>

        {/*
          ...
          FILTER MODULE
          _fr0m: ./season/Filters.jsx
          ...
        */}
      </div>
    );
  }
}

Season.propTypes = {
  seasonAnime: PropTypes.array,
  fetchCurrentAnimeSeason: PropTypes.func,
  children: PropTypes.node
};

export default Season;

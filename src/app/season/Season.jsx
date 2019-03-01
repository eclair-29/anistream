import React, { Component } from "react";
import PropTypes from "prop-types";
import common from "../../utils/config/common";

class AnimeList extends Component {
  componentDidMount() {
    document.title = `Anime List | ${common.docTitle}`;
    this.props.fetchAnimeList();
  }

  render() {
    console.log(this.props.animeList);

    return (
      <div className="anime-list">

      </div>
    );
  }
}

AnimeList.propTypes = {
  animeList: PropTypes.array,
  fetchAnimeList: PropTypes.func
};

export default AnimeList;

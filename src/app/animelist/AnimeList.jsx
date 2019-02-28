import React, { Component } from "react";
import PropTypes from "prop-types";

class AnimeList extends Component {
  componentDidMount() {
    document.title = "Anime List | Animazing";
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

import React, { Component } from "react";

class AnimeList extends Component {
  componentDidMount() {
    document.title = `Anime List | ${document.title}`
  }

  render() {
    return (
      <div className="anime-list"><h1>Anime List Page</h1></div>
    );
  }
}

export default AnimeList;

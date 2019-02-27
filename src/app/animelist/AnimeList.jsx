import React, { Component } from "react";
import { Placeholder } from "../layout";

class AnimeList extends Component {
  componentDidMount() {
    document.title = "Anime List | Animazing"
  }

  render() {
    return (
      <div className="anime-list">
        <Placeholder>Anime List</Placeholder>
      </div>
    );
  }
}

export default AnimeList;

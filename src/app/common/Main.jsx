import React from "react";
import { Scrollbars } from "react-custom-scrollbars";

const Main = ({ children }) => {
  return (
    <main>
      {/* 
        ...
        MAIN CONTENT:
        _holds all the pages/views content(e.g. Home, Anime List, Genres, etc.)
        _added a dedciated custom scrollbar
        ...
      */}
      <Scrollbars
        style={{ width: "100%", height: "100%" }}
        renderThumbVertical={props => <div {...props} className="thumb-vertical" />}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <div className="wrapper">{children}</div>
      </Scrollbars>
    </main>
  );
}

export default Main;

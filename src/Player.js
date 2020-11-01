import React from "react";
import "./App.css";
import Cat from "./components/Cat";

const Player = props => {
  const progressBar = {
    width: (props.progress_ms * 100 / props.item.duration_ms) + '%'
  };

  return (
    <div className="App">
       <br />
      <h3> Now playing: </h3>
      <br />
      <div className="main-wrapper">
        <div className="np_img">
          <img src={props.item.album.images[0].url} />
        </div>
        <div className="np_desc">
          <div className="np_name">{props.item.name}</div>
          <div className="np_artist">
            {props.item.artists[0].name}
          </div>
          <div className="progress">
            <div className="progress_bar" style={progressBar} />
          </div>
        </div>
        <br />
      </div>
      <Cat />
    </div>
  );
}

export default Player;
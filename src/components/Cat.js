import React, { useState } from "react";
import ReactDOM from "react-dom";
import Giphy from "react-hooks-giphy";
import "../App.css";

function Cat() {
  const [flag, triggerFlag] = useState(false);
  const keyword = "cat";
  return (
    <div className="App">
      <br />
      <h3> Need a {keyword} GIF to spice up the party?</h3>
      <br />
      <a
        className="btn_gif"
        onClick={() => triggerFlag(!flag)}
      >
        I WANT MORE!
      </a>
      <br />
      <br />
      <Giphy tag={keyword} triggers={[flag]} />
      <br />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cat />, rootElement);

export default Cat;
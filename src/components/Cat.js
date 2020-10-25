import React, { useState } from "react";
import ReactDOM from "react-dom";
import Giphy from "react-hooks-giphy";
import "../App.css";


function Cat() {
  const [flag, triggerFlag] = useState(false);
  return (
    <div className="App">
      <h5> Here's a cat GIF to brighten up your party!</h5>
        <Giphy tag="cat" triggers={[flag]} />
        <br />
        <a
          className="btn"
          onClick={() => triggerFlag(!flag)}
        >
          Need more?
        </a>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cat />, rootElement);

export default Cat;
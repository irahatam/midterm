import React, { useState } from "react";
import ReactDOM from "react-dom";
import Giphy from "react-hooks-giphy";
import "../App.css";


function Cat() {
  const [flag, triggerFlag] = useState(false);
  const keyword = "cat";
  return (
    <div className="App">
      <h5> Here's a {keyword} GIF for you :-)</h5>
      <br />
      <Giphy tag={keyword} triggers={[flag]} />
      <br />
      <a
        className="btn_gif"
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
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Button, Typography } from "@material-ui/core";
import Giphy from "react-hooks-giphy";


function Cat() {
  const [flag, triggerFlag] = useState(false);
  return (
    <div className="App">
      <Typography variant="h5" gutterBottom>
        This cat represents your mood listening to the song above:
      </Typography>
        <Giphy tag="cat" triggers={[flag]} />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => triggerFlag(!flag)}
        >
          Need more?
        </Button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Cat />, rootElement);

export default Cat;
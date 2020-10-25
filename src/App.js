import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
import Cat from "./Cat";
import Spotify from "./Spotify";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Spotify />
            <Cat />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
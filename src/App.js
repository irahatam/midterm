import React from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
import Spotify from "./components/Spotify";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Spotify />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
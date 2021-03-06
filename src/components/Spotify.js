import React, { Component } from "react";
import * as $ from "jquery";
import hash from "../hash";
import Player from "../Player";
import "../App.css";

// Spotify API reqs
const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = process.env.SPOTIFY_API_KEY;
const redirectUri = "http://localhost:3000/callback";
const scopes = ["user-read-currently-playing", "user-read-playback-state",];

class Spotify extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }]
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0
      },
      progress_ms: 0,
      no_data: false,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
      this.getCurrentlyPlaying(_token);
    }
    this.interval = setInterval(() => this.tick(), 5000);
  }

  tick() {
    if(this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }


  getCurrentlyPlaying(token) {
    // Make a call using the token
    $.ajax({
      url: "https://api.spotify.com/v1/me/player",
      type: "GET",
      beforeSend: xhr => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: data => {
        // Checks if the data is not empty
        if(!data) {
          this.setState({
            no_data: true,
          });
          return;
        }
        // Checks if playing a song
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
          no_data: false
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a className="btn"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20")}&response_type=token&show_dialog=true`} >
              Let your guests know what jam is playing right now!
            </a>
          )}
          {this.state.token && !this.state.no_data && (
            <Player
              item={this.state.item}
              progress_ms={this.state.progress_ms}
            />
          )}
          {this.state.no_data && (
            <p> No one is playing a song in Spotify :-( </p>
          )}
        </header>
      </div>
    );
  }
}

export default Spotify;
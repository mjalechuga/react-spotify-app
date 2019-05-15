import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import TopTracks from "./scopes/TopTracks";
import TopArtists from "./scopes/TopArtists";
import RecentlyPlayed from "./scopes/RecentlyPlayed";
import SpotifyAuth from "./SpotifyAuth";
import NowPlaying from "./scopes/NowPlaying";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="container">
            <Header />
            <Switch>
              <Route path="/" exact component={SpotifyAuth} />

              <Route path="/top-tracks" exact component={TopTracks} />
              <Route path="/top-artists" exact component={TopArtists} />
              <Route path="/recently-played" exact component={RecentlyPlayed} />
              <Route path="/now-playing" exact component={NowPlaying} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

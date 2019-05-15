import {
  SIGN_IN,
  TOP_ARTISTS,
  TOP_TRACKS,
  RECENTLY_PLAYED,
  NOW_PLAYING,
  CURRENT_ROUTE,
  CURRENT_USER
} from "./types";
import spotify from "../apis/Spotify";
import history from "../history";

export const signIn = token => async dispatch => {
  const response = await spotify.get("/", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  localStorage.setItem("TOKEN", token);
  dispatch({ type: SIGN_IN, isSignedIn: true });
  dispatch({ type: CURRENT_USER, payload: response.data });
  history.push("/top-tracks");
};

export const topTracks = (
  timeRange = "long_term",
  getState
) => async dispatch => {
  await spotify
    .get("/top/tracks", {
      headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      params: { limit: 15, time_range: timeRange }
    })
    .then(function(response) {
      dispatch({ type: TOP_TRACKS, payload: response.data, timeRange });
    })
    .catch(function(error) {
      dispatch({ type: SIGN_IN, isSignedIn: false });
      history.push("/");
    });
};

export const topArtists = (timeRange = "long_term") => async dispatch => {
  await spotify
    .get("/top/artists", {
      headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      params: { limit: 15, time_range: timeRange }
    })
    .then(function(response) {
      dispatch({ type: TOP_ARTISTS, payload: response.data, timeRange });
    })
    .catch(function(error) {
      dispatch({ type: SIGN_IN, isSignedIn: false });
      history.push("/");
    });
};

export const recentlyPlayed = () => async dispatch => {
  await spotify
    .get("/player/recently-played", {
      headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` },
      params: { limit: 15 }
    })
    .then(function(response) {
      dispatch({ type: RECENTLY_PLAYED, payload: response.data });
    })
    .catch(function(error) {
      dispatch({ type: SIGN_IN, isSignedIn: false });
      history.push("/");
    });
};

export const nowPlaying = () => async dispatch => {
  await spotify
    .get("/player/currently-playing", {
      headers: { Authorization: `Bearer ${localStorage.getItem("TOKEN")}` }
    })
    .then(function(response) {
      dispatch({ type: NOW_PLAYING, payload: response.data });
    })
    .catch(function(error) {
      dispatch({ type: SIGN_IN, isSignedIn: false });
      history.push("/");
    });
};

export const currentRoute = route => {
  return {
    type: CURRENT_ROUTE,
    payload: route
  };
};

//don't forget to rename this to 'config.js'
export const authEndpoint = "https://accounts.spotify.com/authorize";

export const clientId = "<INSERT YOUR CLIENT ID FROM SPOTIFY DEVELOPER>"; //Get client id from spotify developer by creating an app
export const redirectUri = "http://localhost:3000/"; //Change redirectUri to your app's whitelisted redirect url
export const scopes = [
  //Required scopes for this app
  "user-top-read",
  "user-read-currently-playing",
  "user-read-playback-state",
  "user-read-recently-played"
];

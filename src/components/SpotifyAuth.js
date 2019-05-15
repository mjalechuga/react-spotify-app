import React from "react";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import { signIn, currentRoute } from "../actions";
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import hash from "../hash";
import SpotifyLogo from "../img/Spotify_Logo.png";

class SpotifyAuth extends React.Component {
  componentDidMount() {
    // Set token
    let _token = hash.access_token;
    if (_token) {
      // Set token
      this.props.signIn(_token);
    }
    this.props.currentRoute(this.props.location.pathname);
  }

  renderAuthButton() {
    if (!this.props.isSignedIn || this.props.isSignedIn === null) {
      return (
        <>
          <Helmet>
            <style>{`header{display:none !important;}`}</style>
          </Helmet>

          <div className="login-section">
            <img src={SpotifyLogo} className="spotify-logo" alt="Spotify" />
            <p style={{ fontSize: "30px" }}>
              This application lets you know which tracks and artists you listen
              to the most.
            </p>
            <a
              className="login-button"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              LOG IN TO SPOTIFY
            </a>
          </div>
        </>
      );
    }
  }
  render() {
    return <>{this.renderAuthButton()}</>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, currentRoute }
)(SpotifyAuth);

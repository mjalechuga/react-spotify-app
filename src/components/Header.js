import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  componentDidMount() {}

  renderHeader() {
    return (
      <header className="navbar">
        <Link to="/top-tracks" className="navbar-item">
          Tracks
        </Link>

        <Link to="/top-artists" className="navbar-item">
          Artists
        </Link>

        <Link to="/recently-played" className="navbar-item">
          Recent
        </Link>
        <Link to="/now-playing" className="navbar-item">
          Now Playing
        </Link>
      </header>
    );
  }

  render() {
    return <>{this.renderHeader()}</>;
  }
}

export const mapStateToProps = state => {
  return { route: state.route };
};

export default connect(mapStateToProps)(Header);

import React from "react";
import { connect } from "react-redux";
import { recentlyPlayed, currentRoute } from "../../actions";

class RecentlyPlayed extends React.Component {
  componentDidMount() {
    this.props.recentlyPlayed();
    this.props.currentRoute(this.props.location.pathname);
  }

  renderList() {
    if (!this.props.items.recent) {
      return null;
    }
    let id = 0;
    return this.props.items.recent.map(item => {
      return (
        <div className="scope-item" key={`recent-${id++}`}>
          <a
            href={item.track.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scope-item-title">{item.track.name}</div>
          </a>
          <a
            href={item.track.artists[0].external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scope-item-subtitle">
              by {item.track.artists[0].name}
            </div>
          </a>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="scope-section">
        <div className="left-side">
          <div className="scope-description">
            <h1 className="top">Recently</h1>
            <h1 className="scope">Played</h1>
          </div>
        </div>
        <div className="right-side">
          <div className="scope-list">{this.renderList()}</div>
        </div>
      </section>
    );
  }
}

export const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(
  mapStateToProps,
  { recentlyPlayed, currentRoute }
)(RecentlyPlayed);

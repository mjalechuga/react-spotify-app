import React from "react";
import { connect } from "react-redux";
import { topTracks, currentRoute } from "../../actions";

class TopTracks extends React.Component {
  state = { range: "All Time" };
  componentDidMount() {
    this.props.topTracks();
    this.props.currentRoute(this.props.location.pathname);
  }

  renderList() {
    if (!this.props.items.tracks) {
      return null;
    }
    let id = 0;
    return this.props.items.tracks.map(item => {
      return (
        <div className="scope-item" key={`track-${id++}`}>
          <div className="scope-item-number">{id}</div>
          <a
            href={item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scope-item-title">{item.name}</div>
          </a>
          <a
            href={item.artists[0].external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scope-item-subtitle">by {item.artists[0].name}</div>
          </a>
        </div>
      );
    });
  }

  handleClick = (timeRange, stringRange) => {
    this.props.topTracks(timeRange);
    this.setState({ range: stringRange });
  };

  render() {
    return (
      <section className="scope-section">
        <div className="left-side">
          <div className="scope-description">
            <h1 className="top">Top</h1>
            <h1 className="scope">Tracks</h1>
            <h2 className="sub-scope">of</h2>
            <div className="dropdown">
              <h2 className="time-range dropbtn">{this.state.range}</h2>
              <div className="dropdown-content">
                <a onClick={() => this.handleClick("long_term", "All Time")}>
                  All Time
                </a>
                <a
                  onClick={() =>
                    this.handleClick("medium_term", "Last 6 Months")
                  }
                >
                  Last 6 Months
                </a>
                <a onClick={() => this.handleClick("short_term", "Last Month")}>
                  Last Month
                </a>
              </div>
            </div>
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
  { topTracks, currentRoute }
)(TopTracks);

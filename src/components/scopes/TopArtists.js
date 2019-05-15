import React from "react";
import { connect } from "react-redux";
import { topArtists, currentRoute } from "../../actions";

class TopArtists extends React.Component {
  state = { range: "All Time" };
  componentDidMount() {
    this.props.topArtists();
    this.props.currentRoute(this.props.location.pathname);
  }

  renderList() {
    if (!this.props.items.artists) {
      return null;
    }
    let id = 0;
    return this.props.items.artists.map(item => {
      return (
        <div className="scope-item artists" key={`artist-${id++}`}>
          <div className="img-overlay">
            <img
              className="scope-item-img artists"
              alt={item.name}
              src={item.images[0].url}
            />

            <div className="scope-item-number artists">{id}</div>
          </div>
          <a
            href={item.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="scope-item-title artists">{item.name}</div>
          </a>
        </div>
      );
    });
  }

  handleClick = (timeRange, stringRange) => {
    this.props.topArtists(timeRange);
    this.setState({ range: stringRange });
  };

  render() {
    return (
      <section className="scope-section">
        <div className="left-side">
          <div className="scope-description">
            <h1 className="top">Top</h1>
            <h1 className="scope">Artists</h1>
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
          <div className="scope-list artists">{this.renderList()}</div>
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
  { topArtists, currentRoute }
)(TopArtists);

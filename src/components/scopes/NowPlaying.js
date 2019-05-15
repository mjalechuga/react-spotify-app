import React from "react";
import { connect } from "react-redux";
import { nowPlaying, currentRoute } from "../../actions";
import Palette from "react-palette";
import Helmet from "react-helmet";

class NowPlaying extends React.Component {
  componentDidMount() {
    this.props.nowPlaying();
    this.props.currentRoute(this.props.location.pathname);
  }

  renderDetails() {
    if (!this.props.items.current) {
      return null;
    }

    return (
      <>
        <Palette image={this.props.items.current.album.images[0].url}>
          {palette => (
            <>
              <Helmet>
                <style>
                  {` .now-playing{  background: #090c0f;
                                    background: -webkit-linear-gradient(#090c0f, ${
                                      palette.vibrant
                                    });
                                    background:    -moz-linear-gradient(#090c0f, ${
                                      palette.vibrant
                                    });
                                    background:         linear-gradient(#090c0f, ${
                                      palette.vibrant
                                    });}`}
                </style>
              </Helmet>
            </>
          )}
        </Palette>
        <div className="now-playing">
          <a
            href={this.props.items.current.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={this.props.items.current.album.images[0].url}
              className="now-playing-img"
              alt={`${this.props.items.current.name} by ${
                this.props.items.current.artists[0].name
              }`}
            />
          </a>
          <a
            href={this.props.items.current.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="now-playing-title">
              {this.props.items.current.name}
            </h1>
          </a>
          <a
            href={this.props.items.current.artists[0].external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="now-playing-artist">
              {this.props.items.current.artists[0].name}
            </h2>
          </a>
        </div>
      </>
    );
  }
  render() {
    return <>{this.renderDetails()}</>;
  }
}

export const mapStateToProps = state => {
  return { items: state.items };
};

export default connect(
  mapStateToProps,
  { nowPlaying, currentRoute }
)(NowPlaying);

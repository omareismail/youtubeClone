import React from "react";

class Video extends React.Component {
  onVideoClick = (event) => {
    this.props.videoId(this.props.video.id.videoId);
  };
  render() {
    console.log(this.props.video);

    return (
      <div className="ui card " onClick={this.onVideoClick}>
        <div className="image">
          <img src={this.props.video.snippet.thumbnails.default.url} />
        </div>
        <div className="content">
          <a className="header">{this.props.video.snippet.title}</a>
          <div className="meta">
            <span className="date">{this.props.video.snippet.publishTime}</span>
          </div>
          <div className="description">
            {this.props.video.snippet.description}
          </div>
        </div>
      </div>
    );
  }
}

export default Video;

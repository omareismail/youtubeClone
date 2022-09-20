import React from "react";
import Video from "./Video";

class VideoList extends React.Component {
  getVideo() {
    let videos = this.props.list.map((video) => {
      return (
        <Video
          key={video.id.videoId}
          video={video}
          videoId={this.props.videosId}
        />
      );
    });
    return videos;
  }
  render() {
    return <div className="ui relaxed divided list">{this.getVideo()}</div>;
  }
}

export default VideoList;

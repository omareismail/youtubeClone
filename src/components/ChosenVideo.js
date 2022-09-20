import React from "react";

class ChosenVideo extends React.Component {
  render() {
    if (this.props.vidSrc) {
      let src = `https://www.youtube.com/embed/${this.props.vidSrc}`;
      return <iframe controls src={src}></iframe>;
    } else return <div></div>;
  }
}

export default ChosenVideo;

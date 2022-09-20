import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../Api";
import VideoList from "./VideoList";
import ChosenVideo from "./ChosenVideo";

class App extends React.Component {
  state = { video: [], videoSrc: null };
  searchFor = (topic) => {
    console.log(topic);
    youtube
      .get("/search", {
        params: {
          q: topic,
        },
      })
      .then((response) => {
        this.setState({ video: response.data.items });
      });
  };
  VeiwVedio = (id) => {
    console.log(id);
    this.setState({ videoSrc: id });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar search={this.searchFor} />
        <ChosenVideo vidSrc={this.state.videoSrc} />
        <VideoList list={this.state.video} videosId={this.VeiwVedio} />
      </div>
    );
  }
}

export default App;

import React from "react";
import YouTube from "./../../api/youtube";

import { SocialCards } from "../../components/dashboard-components";

class Starter extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    const fetchData = async (termFromSearchBar) => {
      const response = await YouTube.get("/search", {
        params: {
          q: "Breaking news 4",
        },
      });
      this.setState({
        videos: response.data.items,
      });

      console.log(response.data.items);
    };

    fetchData();
  }

  render() {
    return (
      <div>
        {this.state.videos.map((video, index) => (
          <div key={video.id.videoId}>
            <SocialCards
              key={video.id.videoId}
              videoId={video.id.videoId}
              thumbnail={video.snippet.thumbnails.high.url}
              channelTitle={video.snippet.channelTitle}
              title={video.snippet.title}
              description={video.snippet.description}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Starter;

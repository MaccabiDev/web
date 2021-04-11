import React from "react";
import { Link, Route } from "react-router-dom";
import YouTube from "./../../api/youtube";

import Video from "../video/Video";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

class Starter extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    const fetchData = async (termFromSearchBar) => {
      const response = await YouTube.get("/search", {
        params: {
          q: "World news",
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
        <h5 className="mb-3">Top 50 videos</h5>
        <Row>
          {this.state.videos.map((video, index) => (
            <Col xs="12" md="4">
              {/* --------------------------------------------------------------------------------*/}
              {/* Card-1*/}
              {/* --------------------------------------------------------------------------------*/}
              <Card key={video.id.videoId}>
                <CardImg
                  top
                  width="100%"
                  src={video.snippet.thumbnails.high.url}
                />
                <CardBody>
                  <CardTitle>{video.snippet.title}</CardTitle>
                  <CardSubtitle>
                    {"Channel title: " + video.snippet.channelTitle}
                  </CardSubtitle>
                  <CardText>{video.snippet.description}</CardText>
                  <Link
                    to={"/video/video/" + video.id.videoId}
                    className="btn btn-primary"
                    state={{ videoTitle: video.snippet.title }}
                  >
                    Read more...
                  </Link>
                  <Route
                    path={"/video/video/" + video.id.videoId}
                    component={Video}
                    state={{ videoTitle: video.snippet.title }}
                  />
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Starter;

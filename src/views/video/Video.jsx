import React, { useState, useEffect } from "react";

import TheMovieDB from "./../../api/themovieDB";
import DefaultVideoImage from "../../assets/images/default-video-pic.png";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
const Video = (props) => {
  //const videoId = props.params.id;
  // Uninitialized state will cause Child to error out
  const [movie, setMovie] = useState({});

  const videoId = props.location.pathname.split("/")[3];

  const getMovieDetails = async () => {
    const response = await TheMovieDB.get("/movie/" + videoId, {});
    setMovie(response.data);
  };

  // Data does't start loading
  // until *after* Parent is mounted
  useEffect(() => {
    getMovieDetails();
  });

  return (
    <div>
      <h5 className="mb-3">The movie name: {movie.title}</h5>
      <Row>
        <Col sm="6">
          <Card>
            <CardImg
              top
              width="100%"
              src={
                movie.poster_path != null
                  ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                  : DefaultVideoImage
              }
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <CardText>{movie.overview}</CardText>
              <CardText>
                <a href={movie.homepage != null ? movie.homepage : "./"}>
                  Homepage
                </a>
              </CardText>

              <CardText>
                <small className="text-muted">Status: {movie.status}</small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Video;

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <title>{`Videorezz - ${movie.title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`Videorezz - ${movie.overview}`} />
        <link rel="canonical" href="https://www.videorezz.com/#/video/video" />
      </Helmet>
      <div>
        <h5 className="mb-3">The movie name: {movie.title}</h5>
        <Row>
          <Col sm="6">
            <Card>
              <CardImg
                top
                alt={movie.title}
                width="100%"
                src={
                  movie.poster_path != null
                    ? "https://image.tmdb.org/t/p/w300" + movie.poster_path
                    : DefaultVideoImage
                }
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
    </>
  );
};

export default Video;

import React from "react";
import { Link } from "react-router-dom";
import TheMovieDB from "./../../api/themovieDB";
import DefaultVideoImage from "../../assets/images/default-video-pic.png";

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Pagination,
  PaginationItem,
} from "reactstrap";

class Starter extends React.Component {
  state = {
    videos: [],
    pageSize: 20,
    pageNumber: 1,
    selectedVideo: null,
  };

  componentDidMount() {
    this.fetchData(this.state.pageNumber);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    const pageId = this.props.location.pathname.split("/")[3];
    this.fetchData(pageId);
  }

  fetchData = async (pageNumber) => {
    const themovieDBResponse = await TheMovieDB.get("/search/movie", {
      params: {
        query: "Sport",
        page: pageNumber,
      },
    });
    this.setState({
      videos: themovieDBResponse.data.results,
    });
    console.log(themovieDBResponse.data.results);
  };

  handlePageClick = (e) => {
    e.preventDefault();
    this.fetchData(e.currentTarget.innerText);
  };

  render() {
    const pageItems = [];
    for (let index = 0; index < this.state.pageSize; index++) {
      let page = index + 1;
      pageItems.push(
        <Link className="page-link" to={"/starter/starter/" + page}>
          {page}
        </Link>
      );
    }

    return (
      <div>
        <h5 className="mb-3">Top Action Videos From ThemovieDB</h5>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardBody className="">
                <Pagination aria-label="Page navigation example">
                  {pageItems.map((item, index) => (
                    <PaginationItem key={index}>{item}</PaginationItem>
                  ))}
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          {this.state.videos.map((video, index) => (
            <Col xs="12" md="4" key={video.id}>
              {/* --------------------------------------------------------------------------------*/}
              {/* Card-1*/}
              {/* --------------------------------------------------------------------------------*/}
              <Card key={video.id}>
                <CardImg
                  top
                  alt={video.title}
                  width="100%"
                  src={
                    video.poster_path != null
                      ? "https://image.tmdb.org/t/p/w300" + video.poster_path
                      : DefaultVideoImage
                  }
                />
                <CardBody>
                  <CardTitle>{video.title}</CardTitle>
                  <CardSubtitle>
                    {"Original title: " + video.original_title}
                  </CardSubtitle>
                  <CardText>{video.overview}</CardText>

                  <Link
                    to={"/video/video/" + video.id}
                    className="btn btn-primary"
                  >
                    Read more...
                  </Link>
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

import React, { useState } from "react";
import { Card, CardBody, Tooltip, Row, Col } from "reactstrap";

const TechCards = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipOpen2, setTooltipOpen2] = useState(false);

  const toggle = () => {
    setTooltipOpen(!tooltipOpen);
  };

  const toggle2 = () => {
    setTooltipOpen2(!tooltipOpen2);
  };

  return (
    /*--------------------------------------------------------------------------------*/
    /* Used In Dashboard-1                                                        */
    /*--------------------------------------------------------------------------------*/
    <Row>
      <Col lg="4">
        <Card className="blog-widget">
          <CardBody>
            <div className="blog-image">
              <img
                src={props.thumbnail}
                alt={props.title}
                className="img-fluid"
              />
            </div>
            <h4>{props.title}</h4>
            <div className="badge badge-rounded badge-success text-white">
              {props.channelTitle}
            </div>
            <p className="mt-3 mb-3">{props.description}</p>
            <div className="d-flex">
              <div className="read">
                <a
                  href={"#/video/video/" + props.videoId}
                  className="link font-medium"
                >
                  Read More
                </a>
              </div>
              <div className="ml-auto">
                <a href="{undefined}" className="link mr-2" id="TooltipExample">
                  <i className="mdi mdi-heart-outline" />
                </a>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen}
                  target="TooltipExample"
                  toggle={toggle.bind(null)}
                >
                  Like
                </Tooltip>
                <a href="{undefined}" className="link" id="TooltipExample2">
                  <i className="mdi mdi-share-variant" />
                </a>
                <Tooltip
                  placement="top"
                  isOpen={tooltipOpen2}
                  target="TooltipExample2"
                  toggle={toggle2.bind(null)}
                >
                  Share
                </Tooltip>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default TechCards;

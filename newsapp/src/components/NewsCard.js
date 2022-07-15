import React, { useState } from "react";
import LikeButton from "./LikeButton";
import ReactDOM from "react-dom";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";
function NewsCard({ article }) {
  /* destructuring */
  const { urlToImage, title, url, description, content } = article;
  const [cliked, setCLiked] = useState(false); // conteo de clicks
  //Looad img if is available
  const image = urlToImage ? (
    <img
      className="rounded"
      src={urlToImage}
      alt={title}
      width="300"
      height="400"
    />
  ) : (
    <></>
  );

  const onClickFullView = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div Style="text-align:left;">
      <Card color="dark" inverse className="m-1">
        <CardBody>
          <Row xs="8">
            <Col xs="3">
              <CardImg src={urlToImage} width="100%" />
            </Col>
            <Col>
            <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="flex mb-2 text-muted" tag="h6">
            {description}
          </CardSubtitle>
          <Button
            onClick={(ev) => {
              onClickFullView(url);
              setCLiked((cliked = true)); // marca el click
            }}
          >
            Ver completo
          </Button>
          <LikeButton/>
            </Col>
          </Row>

          

          
        </CardBody>
      </Card>
    </div>
  );
}

export default NewsCard;

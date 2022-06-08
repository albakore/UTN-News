import React from "react";
import ReactDOM from "react-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Button,
} from "reactstrap";
function NewsCard({ article }) {
  /* destructuring */
  const { urlToImage, title, url, description, source } = article;
  //Looad img if is available
  const image = urlToImage ? (
    <img
      className="img-fluid rounded mx-auto"
      src={urlToImage}
      alt={title}
      width="500"
      height="600"
    />
  ) : (
    <></>
  );

  const onClickFullView = (url) => {
    ReactDOM.render(
      <iframe src={url} width="540" height="450" />,
      document.getElementById("id-main")
    );
  };
  return (
    <div>
      <Card color="dark" inverse className="m-1">
        <CardBody>
          <CardImg src={urlToImage} width="100%" />
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {description}
          </CardSubtitle>

          <Button
            onClick={(ev) => {
              onClickFullView(url);
            }}
          >
            Ver completo
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default NewsCard;

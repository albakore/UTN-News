import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, Button } from "reactstrap";
function NewsCard({ article }) {
  /* destructuring */
  const { urlToImage, title, url, description, source } = article;
  //Looad img if is available
  const image = urlToImage ? (
      <img className="img-fluid rounded mx-auto"  src={urlToImage} alt={title} width="500" height="600" />
  ) : <></>;
  return (
    <div>
    <Card color="dark" inverse className="m-1">
      <CardBody>
        <CardImg src={urlToImage} width="100%"/>
        <CardTitle tag="h5">
          {title}
        </CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {description}
        </CardSubtitle>
        
        <Button href={url} target="_blank">
          Ver completo
        </Button>
      </CardBody>
    </Card>
    </div>
    
  );
}

export default NewsCard;

import React from "react";

function NewsCard({ article }) {
  /* destructuring */
  const { urlToImage, title, url, description, source } = article;
  //Looad img if is available
  const image = urlToImage ? (
    <div className="card-image-top w-25" >
      <img src={urlToImage} alt={title} />
      <span className="card-title">{source.name}</span>
    </div>
  ) : <></>;
  return (
    <div className="card">
      <div className="d-flex flex-column col s12 m6 l4">
        <figure className="figure-img">{image}</figure>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waver-light btn blue-grey darken-3"
          >
            See complete
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

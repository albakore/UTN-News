import React from "react";
import NewsCards from "./NewsCard";

import { useState, useEffect } from "react";
import shortid from "shortid";

function ListNews({country,category, pageSize }) {
  const [articles, setarticles] = useState([]);


  useEffect(() => {
    checkNews(category);
  }, []);

  useEffect(() => {
    checkNews(category);
  }, [category, country]);

  const checkNews = async () => {
    const url = `
          https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=15b2cebfe360495d9c4f1ae4925c6af6
        `;
    console.log(url);
    const response = await fetch(url);
    const news = await response.json();
    setarticles(news.articles);
  };

  return (
    <div className="mt-1">
      <div>
        {articles.map((article) => (
          <NewsCards key={shortid.generate()} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ListNews;

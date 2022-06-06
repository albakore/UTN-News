import React from "react";
import NewsCards from "./NewsCard";
import FilterNews from "./FilterNews";

import { useState, useEffect } from "react";

function ListNews() {
  const [articles, setarticles] = useState([]);
  const [category, setCategory] = useState("general");
  const [pageSize, setPageSize] = useState(20);
  const [countries, setCountries] = useState(["ar", "us", "en"]);
  const [country, setCountry] = useState("ar");
  const [categories, setCategories] = useState([
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ]);

  useEffect(() => {
    checkNews(category);
  }, []);

  useEffect(() => {
    checkNews(category);
  }, [category, country]);

  const checkNews = async () => {
    const url = `
          https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&country=${country}&apiKey=15b2cebfe360495d9c4f1ae4925c6af6
        `;
    const response = await fetch(url);
    const news = await response.json();
    setarticles(news.articles);
  };

  return (
    <div>
      <FilterNews
        pageSize={pageSize}
        setPageSize={setPageSize}
        categories={categories}
        setCategory={setCategory}
      />
      <ul>
        {articles.map((article) => (
          <li>
            <NewsCards article={article} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListNews;

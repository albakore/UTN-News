import React from "react";
import NewsCards from "./NewsCard";

import { useState, useEffect } from "react";

function ListNews() {

  const [articles, setarticles] = useState([]);

  useEffect(() => {
    checkNews();
  }, []);

  const checkNews = async (category = "general") => {
    const url = `
          https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=15b2cebfe360495d9c4f1ae4925c6af6
        `;
    const response = await fetch(url);
    const news = await response.json();
    setarticles(news.articles);
  };

  return <div><ul>
   { 
   articles.map(  article =>(
     <li>
       <NewsCards  article={article } />
     </li>
   )
      
   )
   }
    </ul></div>;
}

export default ListNews;

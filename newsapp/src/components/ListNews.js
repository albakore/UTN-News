import React from 'react'
import { useState, useEffect } from 'react';

function ListNews() {
const [articles, setarticles] = useState([]);
useEffect(() => {
checkNews();
}, [])




const checkNews = async (category = 'general') => {
        const url = `
          https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=15b2cebfe360495d9c4f1ae4925c6af6
        `;
        const response = await fetch(url);
        const news = await response.json();
setarticles
      }
    
  return (
    <div>ListNews</div>
  )
}

export default ListNews
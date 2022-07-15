import React, { useState, useEffect } from "react";
import {BsChevronDoubleUp} from 'react-icons/bs'
import BarraNav from "./components/BarraNav";
import ListNews from "./components/ListNews";
import FilterNews from "./components/FilterNews";
import ScrollToTop from "react-scroll-up";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch, Link } from "react-router-dom";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Button,
  ButtonGroup,
} from "reactstrap";

function App() {
  const [offcanvas, setoffcanvas] = useState(true);

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

  useEffect(() => {}, []);

  const mostrar = () => setoffcanvas(!offcanvas);
  const MyCanvas = () => {
    return (
      <Offcanvas
        backdrop={false}
        direction="start"
        scrollable
        isOpen={offcanvas}
        children={false}
        tabIndex={10}
        //toggle={mostrar}
      >
        <OffcanvasHeader toggle={mostrar}>Noticias</OffcanvasHeader>
        <OffcanvasBody>
          <ListNews country={country} category={category} pageSize={pageSize} />
        </OffcanvasBody>
      </Offcanvas>
    );
  };

  return (
    <div className="App">
      

      <BarraNav  pageSize={pageSize}
                  setPageSize={setPageSize}
                  categories={categories}
                  setCategory={setCategory}
                  category={category}/>
      <ButtonGroup>
        {categories.map((dato) => {
          return <Button color="primary">{dato}</Button>;
        })}
      </ButtonGroup>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hola Perro</div>} />
        </Routes>
      </BrowserRouter>
      <div className="container">
        
        <div id="id-main"></div>
        <ListNews country={country} category={category} pageSize={pageSize} />
      </div>
      <ScrollToTop showUnder={160} >
        <Button className="align-center"  Style="border-radius:100%;" color="light">
        <BsChevronDoubleUp/>
        </Button>
      </ScrollToTop>
    </div>
  );
}

export default App;

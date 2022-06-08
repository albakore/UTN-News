import React, { useState, useEffect } from "react";

import ListNews from "./components/ListNews";
import FilterNews from "./components/FilterNews";
import "./App.css";
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from "reactstrap";

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
      <Button color="primary" onClick={mostrar}>
        Open
      </Button>
      <div className="container">
        <FilterNews
          className="h-25 w-25 mr-4"
          pageSize={pageSize}
          setPageSize={setPageSize}
          categories={categories}
          setCategory={setCategory}
          category={category}
        />
        <div id="id-main"></div>
        <MyCanvas className="mt-4" />
      </div>
    </div>
  );
}

export default App;

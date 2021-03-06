import React, { useState, useEffect } from "react";
import BarraNav from "./components/BarraNav";
import ListNews from "./components/ListNews";
import FilterNews from "./components/FilterNews";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import 
{ Offcanvas, 
  OffcanvasBody, 
  OffcanvasHeader, 
  Button,
  ButtonGroup} from "reactstrap";

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

      <BarraNav/>
      <ButtonGroup>
        <Button color="primary" >
          One
        </Button>
        <Button color="primary" >
          Two
        </Button>
        <Button color="primary" >
          Three
        </Button>
      </ButtonGroup>
      <Routes>
        <Route exact path="/" component={ListNews} />
      </Routes>
          

    </div>
  );
}

export default App;

import React from "react";
import shortid from "shortid";
import { Button, Form } from "react-bootstrap";

function FilterNews({ pageSize, setPageSize, categories, setCategory , category }) {
  return (
    <div className="container">
      <Form className="form1" size={"lg"}>
        <Form.Group className="mb-3" controlId="formGroupCounter">
          <Form.Label htmlFor="inputPassword5">
            Cantidad de Resultados
          </Form.Label>

          <Form.Control
            type="number"
            id="inputPassword5"
            value={pageSize}
            onChange={(ev) => {
              setPageSize(ev.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSelect">
          <Form.Label htmlFor="formGroupSelect">Categorías</Form.Label>

          <Form.Select
            className="list-group"
            onChange={(ev) => {
              setCategory(ev.target.value);
            }}
          >
            {categories.map((item) => (
              <option
                className="list-item"
                key={shortid.generate()}
                onChange={(ev) => {
                  console.log(ev.value);
                }}
                value={item}
              >
                {item}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Label htmlFor="formGroupSelect"><strong>{`Categoría: ${category}`}</strong></Form.Label>
      </Form>
    </div>
  );
}

export default FilterNews;

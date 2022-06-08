import React from "react";
import shortid from "shortid";
import { Button, Form, Input, FormGroup, Label } from "reactstrap";

function FilterNews({ pageSize, setPageSize, categories, setCategory , category }) {
  return (
    <div>
      <Form className="m-1" >
        <FormGroup className="mb-3" controlId="formGroupCounter">
          <Label for="InputPassword5" >
            Cantidad de Resultados
          </Label>

          <Input
            type="number"
            id="InputPassword5"
            value={pageSize}
            onChange={(ev) => {
              setPageSize(ev.target.value);
            }}
          />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formGroupSelect">
          <Label for="formGroupSelect">Categorías</Label>

          <Input
            type="select"
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
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
}

export default FilterNews;

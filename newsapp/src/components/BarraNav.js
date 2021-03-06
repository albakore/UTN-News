import React, { useState, useEffect } from "react";
import FilterNews from "./FilterNews";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Dropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormText,
  FormGroup,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

export default function BarraNav({ pageSize, setPageSize, categories, setCategory , category }) {
  const [navToggler, setnavToggler] = useState(false);
  const [loggeado, setLoggeado] = useState(false);
  const mostrar = () => setnavToggler(!navToggler);
  const [mostrarModal, setMostrarModal] = useState(false);


  return (
    <div>
      <Navbar color="dark" dark fixed="top" expand="md" light>
        <NavbarBrand href="/">UTN News</NavbarBrand>
        <NavbarToggler onClick={mostrar} />
        <Collapse navbar isOpen={navToggler} logged="">
          <Nav className="me-auto" navbar>
          <NavLink to="/">Inicio</NavLink>
            <NavItem>
              <NavLink to="/elequipo">El equipo</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <FilterNews
                  pageSize={pageSize}
                  setPageSize={setPageSize}
                  categories={categories}
                  setCategory={setCategory}
                  category={category}
                />

                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {loggeado ? (
            <Button className="m-1" color="primary">
              Crear Noticia
            </Button>
          ) : (
            <></>
          )}

          <InicioSesion
            loggeado={setLoggeado}
            modal={setMostrarModal}
            login={loggeado}
          />
          {mostrarModal ? (
            <VentanaLogin
              visible={mostrarModal}
              modal={setMostrarModal}
              loggeado={setLoggeado}
            />
          ) : (
            <></>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

function InicioSesion({ loggeado, modal, login }) {
  const toggleSesion = () => {
    loggeado(!login);
  };

  const [dropDownSesion, setdropDownSesion] = useState(false);
  const toggleDropDown = () => setdropDownSesion(!dropDownSesion);
  return (
    <div>
      {login ? (
        <div>
          <Dropdown toggle={toggleDropDown} isOpen={dropDownSesion}>
            <DropdownToggle caret>Kevin Kener</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <b>Perfil</b>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={toggleSesion}>
                <b Style="color:red;">Cerrar Sesion</b>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      ) : (
        <Button
          className="m-1"
          onClick={() => {
            modal(true);
          }}
        >
          Inicia Sesion
        </Button>
      )}
    </div>
  );
}

function VentanaLogin({ modal, visible, loggeado }) {
  const usuario = { email: "kevink.contacto@gmail.com", password: "12345678" };
  const [entradas, setEntradas] = useState({ email: "", password: "" });
  const [formErrores, setFormErrores] = useState({ ...entradas });
  const [isSubmit, setIsSubmit] = useState(false);

  const handleEntradas = (e) => {
    const { name, value } = e.target;
    setEntradas({ ...entradas, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrores(validacion(entradas));
    setIsSubmit(true);
  };

  // useEffect(() => {
  //   if (Object.keys(formErrores).length > 0) {
  //     console.log(formErrores);
  //   }
  // }, [formErrores]);

  const validacion = (valores) => {
    const errores = { email: "", password: "" };
    const regex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    const regexPassword = new RegExp("(?=.*?[a-zA-Z0-9._:$!%-]{8,})");
    if (!valores.email) {
      errores.email = "El email es requerido!";
    } else if (!regex.test(valores.email)) {
      errores.email = "La informacion no corresponde a un mail valido.";
    }
    if (!valores.password) {
      errores.password = "La contrase??a es requerida!";
    } else if (!regexPassword.test(valores.password)) {
      errores.password = "La contrase??a debe contener 8 caracteres como minimo";
    }

    if (JSON.stringify(usuario) === JSON.stringify(entradas)) {
      console.log("logeado");
      loggeado(true);
      modal(false);
    }
    return errores;
  };

  return (
    <Modal isOpen="true">
      <ModalHeader toggle={() => modal(false)}>Iniciar Sesion</ModalHeader>
      <ModalBody>
        {/* <pre>{JSON.stringify(entradas, undefined, 2)}</pre> */}
        <Form>
          <FormGroup>
            <Label htmlFor="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="kevin@gimeil.com"
              type="email"
              value={entradas.email}
              onChange={handleEntradas}
              invalid={formErrores.email.length > 0 && isSubmit}
              valid={!formErrores.email.length > 0 && isSubmit}
            />
            <FormFeedback invalid>{formErrores.email}</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="examplePassword">Contrase??a</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Tu contrase??a"
              type="password"
              value={entradas.password}
              onChange={handleEntradas}
              invalid={formErrores.password.length > 0 && isSubmit}
              valid={!formErrores.password.length > 0 && isSubmit}
            />
            <FormFeedback invalid>{formErrores.password}</FormFeedback>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="button" onClick={handleSubmit}>
          Ingresar
        </Button>
      </ModalFooter>
    </Modal>
  );
}

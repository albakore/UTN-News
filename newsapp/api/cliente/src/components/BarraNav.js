import React, { useState, useEffect} from "react";
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

export default function BarraNav() {

  const [navToggler, setnavToggler] = useState(false);
  const [loggeado, setLoggeado] = useState(false);
  const mostrar = () => setnavToggler(!navToggler);
  const [mostrarModal, setMostrarModal] = useState(false);

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">UTN News</NavbarBrand>
        <NavbarToggler onClick={mostrar} />
        <Collapse navbar isOpen={navToggler} logged="">
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/inicio/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/elequipo/">El equipo</NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>

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

          <InicioSesion loggeado={setLoggeado} modal={setMostrarModal} />
          {mostrarModal ? (
            <VentanaLogin visible={mostrarModal} modal={setMostrarModal} />
          ) : (
            <></>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

function InicioSesion({ loggeado, modal }) {
  const [sesionIniciada, setSesionIniciada] = useState(false);

  const toggleSesion = () => {
    setSesionIniciada(!sesionIniciada);

    loggeado(!sesionIniciada);
  };

  const [dropDownSesion, setdropDownSesion] = useState(false);
  const toggleDropDown = () => setdropDownSesion(!dropDownSesion);
  return (
    <div>
      {sesionIniciada ? (
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

function VentanaLogin({ modal, visible }) {
  const usuario = { email: "kevin", password: "1234" };
  const [entradas, setEntradas] = useState({email:'',password:''});
  const [formErrores,setFormErrores] = useState ({});
  const [isSubmit, setIsSubmit] = useState(false)

  const handleEntradas = (e) => {
    const { name, value } = e.target;
    setEntradas({...entradas, [name] : value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrores(validacion(entradas));
    
    setIsSubmit(true);
  }

  useEffect(()=>{
    if(Object.keys(formErrores).length === 0 && isSubmit){
        console.log(formErrores);
    }
  },[formErrores])



  const validacion = (valores) => {
    const errores = {};
    const regex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    if (!valores.email){
        errores.email = "El email es requerido!";
    }
    if (!valores.password){
        errores.password = "La contraseña es requerida!";
    }
    return errores;

  }

  return (
    <Modal isOpen="true">
      <ModalHeader toggle={() => modal(false)}>Iniciar Sesion</ModalHeader>
      <ModalBody>
        <pre>{JSON.stringify(entradas, undefined, 2)}</pre>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="kevin@gimeil.com"
              type="email"
              value={entradas.email}
              onChange={handleEntradas}
            />
            <FormFeedback valid>Tu mail es correcto.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Contraseña</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Tu contraseña"
              type="password"
              value={entradas.password}
              onChange={handleEntradas}
            />
            <FormFeedback invalid>{formErrores.password}</FormFeedback>

            
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onSubmit={handleSubmit}>
          Ingresar
        </Button>{" "}
        <Button onClick={() => modal(false)}>Cancelar</Button>
      </ModalFooter>
    </Modal>
  );
}

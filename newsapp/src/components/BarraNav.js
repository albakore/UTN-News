import React, { useState } from "react";
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
} from "reactstrap";

export default function BarraNav() {
  const [navToggler, setnavToggler] = useState(false);

  const mostrar = () => setnavToggler(!navToggler);

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">UTN News</NavbarBrand>
        <NavbarToggler onClick={mostrar} />
        <Collapse navbar isOpen={navToggler}>
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
          <InicioSesion />
        </Collapse>
      </Navbar>
    </div>
  );
}

function InicioSesion() {
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const toggleSesion = () => setSesionIniciada(!sesionIniciada);
  const [dropDownSesion, setdropDownSesion] = useState(false);
  const toggleDropDown = () => setdropDownSesion(!dropDownSesion);
  return (
    <div>
      {sesionIniciada ? (
          <div>
          
          <Dropdown toggle={toggleDropDown} isOpen={dropDownSesion}>
            <DropdownToggle caret>Kevin Kener</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={toggleSesion}>
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
        <Button onClick={toggleSesion}>Inicia Sesion</Button>
      )}
    </div>
  );
}

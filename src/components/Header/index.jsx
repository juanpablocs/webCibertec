import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Header = () => {
  return (
    <header>
      <h1 className={style.header_title}>Servicios</h1>
      <Navbar bg="light" variant="light"  style={{justifyContent:'center'}}>
        <Nav>
          <Nav.Link as='span'>
            <NavLink to="/" className={n => "btn" + (n.isActive ? " btn-primary" : "") }>Todos</NavLink>
          </Nav.Link>
          <Nav.Link as='span'>
            <NavLink to="/autos" className={n => "btn" + (n.isActive ? " btn-primary" : "") }>Autos</NavLink>
          </Nav.Link>
          <Nav.Link as='span'>
            <NavLink to="/salud" className={n => "btn" + (n.isActive ? " btn-primary" : "") }>Salud</NavLink>
          </Nav.Link>
          <Nav.Link as='span'>
            <NavLink to="/hogar" className={n => "btn" + (n.isActive ? " btn-primary" : "") }>Hogar</NavLink>
          </Nav.Link>
        </Nav>
      </Navbar>
    </header>
  );
};

export default Header;

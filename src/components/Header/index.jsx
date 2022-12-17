import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import style from "./index.module.css";

const Header = () => {
  const [date, setDate] = React.useState(new Date());
  React.useEffect(() => {

    const interval = setInterval(()=>{
      setDate(new Date());
    }, 100);
    return () => clearInterval(interval)
  }, []);
  return (
    <header>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom:20}}>
        <h1 className={style.header_title}>Servicios</h1>
        <span>Fecha y Hora: {date.toLocaleDateString()} {date.toLocaleTimeString()}</span>
      </div>
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

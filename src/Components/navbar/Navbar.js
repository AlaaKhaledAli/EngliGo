import {Navbar,Container,Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';
function NavBar() {
  const location=useLocation();
  const isActive=(path)=>location.pathname===path;
  return(
    <>
             <Navbar className={`mb-5 w-100 ${isActive("/")&&"position-fixed" }`}>
        <Container>
          <Navbar.Brand href="#home">
            EngliGo
          </Navbar.Brand>
<Nav className="ms-auto align-items-baseline">
            <Nav.Link ><Link  to="/"> Home</Link></Nav.Link>
            <Nav.Link ><Link  to="login">Login</Link></Nav.Link>
            <Nav.Link ><Link  to="register">Register</Link></Nav.Link>
            <Link  to="challenge" variant="danger" className="btn bg-danger btn-lg mx-2 rounded-pill" >
              Get daily challenge
              </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
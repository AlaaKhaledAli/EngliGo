import {Navbar,Container,Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';
function NavBar() {
  const location=useLocation();
  // const [khalehFixed,setkhalehFixed]=useState(false);
  // location.pathname!=='/'&&setkhalehFixed(true);
  
  return(
    <>
             <Navbar className={` mb-5 w-100 `}>
        <Container>
          <Navbar.Brand href="#home">
            EngliGo
          </Navbar.Brand>
<Nav className="ms-auto align-items-baseline">
            <Nav.Link ><Link to="/"> Home</Link></Nav.Link>
            <Nav.Link ><Link to="login">Login</Link></Nav.Link>
            <Nav.Link ><Link to="register">Register</Link></Nav.Link>
            <Button variant="danger" className="btn-lg mx-2 rounded-pill">Get daily challange</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
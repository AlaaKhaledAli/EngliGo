import {Navbar,Container,Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';
function NavBar() {
  useEffect(() => {

  }, [])
  return(
    <>
             <Navbar className="mb-5 position-fixed w-100 ">
        <Container>
          <Navbar.Brand href="#home">
            EngliGo
          </Navbar.Brand>
<Nav className="ms-auto align-items-baseline">
            <Nav.Link ><Link to="/"> Home</Link></Nav.Link>
            <Nav.Link ><Link to="login">Login</Link></Nav.Link>
            <Nav.Link ><Link to="register">Register</Link></Nav.Link>
            <Button variant="danger" className="btn-md-lg btn-sm mx-2 rounded-pill">Danger</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;
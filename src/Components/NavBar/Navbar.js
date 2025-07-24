import { Navbar, Container, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';
function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container ">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-6 align-items-center">
              <li className="nav-item text-white">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link active" aria-current="page" to="/ChatBot">ChatBot</Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link active" aria-current="page" to="/Writing">Writing</Link>
              </li>
              <li className="nav-item text-white">
                <Link className="nav-link" aria-current="page" to="/Reading">Reading</Link>
              </li>
            </ul>

            <Link to="/login" className="mx-3 px-5 py-2 btn rounded-pill btn bg-light border-0 text-black">Login</Link>
            <Link to="/register" className="mx-3 px-5 py-2 btn border-0  rounded-pill btn trans-bg bg-white-30">Sign up</Link>
          </div>
        </div>
      </nav>

      {/* <Navbar className={`mb-5 w-100 ${isActive("/") && "position-fixed"}`}>
        <Container>
          <Navbar.Brand href="#home">
            EngliGo
          </Navbar.Brand>
          <Nav className="ms-auto align-items-baseline">
            <Nav.Link ><Link to="/"> Home</Link></Nav.Link>
            <Nav.Link ><Link to="login">Login</Link></Nav.Link>
            <Nav.Link ><Link to="register">Register</Link></Nav.Link>
            <Link to="challenge" variant="danger" className="btn bg-danger btn-lg mx-2 rounded-pill" >
              Get daily challenge
            </Link>
          </Nav>
        </Container>
      </Navbar> */}
    </>
  );
}
export default NavBar;
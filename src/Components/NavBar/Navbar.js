import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import './Navbar.css';

function NavBar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fs-6 align-items-center">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive("/") ? "active" : ""}`} 
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive("/ChatBot") ? "active" : ""}`} 
                to="/ChatBot"
              >
                ChatBot
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive("/Writing") ? "active" : ""}`} 
                to="/Writing"
              >
                Writing
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive("/Reading") ? "active" : ""}`} 
                to="/Reading"
              >
                Reading
              </Link>
            </li>
          </ul>

          <Link to="/login" className="mx-3 px-5 py-2 btn rounded-pill btn-login">Login</Link>
          <Link to="/register" className="mx-3 px-5 py-2 btn btn-signup rounded-pill">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
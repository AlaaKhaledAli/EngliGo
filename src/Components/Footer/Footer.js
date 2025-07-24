import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="row justify-content-center">
            {/* First column - made wider (col-md-6) */}
            <div className="col-12 col-md-6 footer-brand">
              <p className="h1">EngliGo</p>
              <p className="tagline">
                EngliGo is an intelligent assistant using advanced AI to enhance
                your English learning experience.
              </p>
              <div className="newsletter">
                <h4>Subscribe to our newsletter</h4>
                <div className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button className="subscribe-btn">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Second column - kept at col-md-2 */}
            <div className="col-12 col-md-2 footer-links">
              <h4>Quick Links</h4>
              <Link to="/">Home</Link>
              <Link to="/written">Written</Link>
              <Link to="/reading">Reading</Link>
              <Link to="/spoken">Spoken</Link>
              <Link to="/ranking">Ranking</Link>
            </div>

            {/* Third column - kept at col-md-2 */}
            <div className="col-12 col-md-2 footer-contact">
              <h4>Contact Us</h4>
              <p><i className="fas fa-map-marker-alt"></i> 123 AI Street, Tech City</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> support@engligo.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="row align-items-center">
            {/* Adjusted copyright column to col-md-4 */}
            <div className="col-12 col-md-4 copyright">
              <p>© {new Date().getFullYear()} EngliGo Technologies Inc. All rights reserved.</p>
            </div>
            {/* Adjusted social icons column to col-md-8 */}
            <div className="col-12 col-md-8 social-icons">
              <Link to="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="#" aria-label="Twitter">
                <i className="fab fa-x-twitter"></i>
              </Link>
              <Link to="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
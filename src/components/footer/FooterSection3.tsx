import { Link } from "react-router-dom";

const FooterSection3 = () => {
  return (
    <footer className="rv-31-footer pt-100 mt-115">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-8 col-sm-7 ">
            <div className="rv-31-footer-wized rv-31-footer-about">
              <Link to="/">
                <img
                  src="assets/img/Software/footer/rv-31-footer-logo.png"
                  alt="footer"
                />
              </Link>
              <p className="rv-31-footer-text">
                Nunc in sollicitudin diam bibendum <br /> malesuada sodales
                porttitor.
              </p>
              <div className="rv-31-footer-socials">
                <a href="#">
                  <span>
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-5 col-6">
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Company</h4>
              <ul className="footer-wized-ul">
                <li>
                  <Link to="/about">History</Link>
                </li>
                <li>
                  <Link to="/projects">Feature</Link>
                </li>
                <li>
                  <Link to="/services">Intregration</Link>
                </li>
                <li>
                  <Link to="/contact">Pricing</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-3 col-6">
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Products</h4>
              <ul className="footer-wized-ul">
                <li>
                  <Link to="/about">Enterprise</Link>
                </li>
                <li>
                  <Link to="/shop">what's New</Link>
                </li>
                <li>
                  <a href="#">Customers</a>
                </li>
                <li>
                  <Link to="projects">Templates</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-4 col-6">
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Support</h4>
              <ul className="footer-wized-ul">
                <li>
                  <Link to="/contact">Forum Support</Link>
                </li>
                <li>
                  <Link to="/contact">Help & FAQ</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/contact">Pricing & Plans</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-5 col-6">
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Get Apps On!</h4>
              <div className="footer-wized-ul">
                <a
                  href="https://www.apple.com/app-store/"
                  className="download-ios mb-15"
                >
                  <i className=" fa-brands fa-apple"></i> Download iOS
                </a>
                <a
                  href="https://play.google.com/store/apps?hl=en&gl=US"
                  className="download-android "
                >
                  <img
                    src="assets/img/Software/banner/android-icon.png"
                    className="me-2 "
                    alt="android"
                  />
                  Download Android
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="rv-31-footer-bottom mt-70">
            <span>
              © {new Date().getFullYear()} All Rights Reserved by{" "}
              <a href="https://themeforest.net/search/codebasket">Codebasket</a>
            </span>
            <span>
              <Link to="/contact">Privacy Policy</Link> |{" "}
              <Link to="/contact">Term of Service</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection3;

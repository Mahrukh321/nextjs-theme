import { Link } from "react-router-dom";

const FooterSection4 = () => {
  return (
    <footer className="rv-32-footer pt-100 mt-140">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="rv-31-footer-wized rv-31-footer-about pr-100 wow fadeInUp">
              <Link to="/">
                <img
                  src="assets/img/Software/footer/rv-32-footer-logo.png"
                  alt="footer"
                />
              </Link>
              <p className="rv-31-footer-text">
                Morbi pharetra, eros sed euismod pellentesque, nulla risus
                lobortis purus, quis maximus.
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

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div
              className="rv-31-footer-wized wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h4 className="rv-31-footer-wized__title">Useful Links</h4>
              <ul className="footer-wized-ul">
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/projects">Latest Work</Link>
                </li>
                <li>
                  <Link to="/team">Team Members</Link>
                </li>
                <li>
                  <Link to="/blog">Latest Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div
              className="rv-31-footer-wized wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <h4 className="rv-31-footer-wized__title">Our Services</h4>
              <ul className="footer-wized-ul">
                <li>
                  <a href="#">Seo Optimization</a>
                </li>
                <li>
                  <a href="#">Content Marketing</a>
                </li>
                <li>
                  <a href="#">Data Analysis</a>
                </li>
                <li>
                  <a href="#">Digital Marketing</a>
                </li>
                <li>
                  <a href="#">Web Analysis</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="rv-31-footer-wized wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <h4 className="rv-31-footer-wized__title">Newsletter SignUp</h4>
              <form action="#" className="rv-32-footer-nwsltr__form  ">
                <div className="nwsltr-top">
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your Email..."
                  />
                  <button>
                    <i className="fa-light fa-arrow-right"></i>
                  </button>
                </div>
                <div className="rv-32-footer-nwsltr__checkbox">
                  <input
                    type="checkbox"
                    required
                    id="footer-nwsltr-checkbox"
                    name="checkbox"
                  />
                  <label id="nwsltr-checkbox">
                    {" "}
                    I agree to the <Link to="/contact">Privacy Policy</Link>.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="rv-31-footer-bottom mt-75 wow fadeInUp">
            <span>
              © 2024 All Rights Reserved by{" "}
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
export default FooterSection4;

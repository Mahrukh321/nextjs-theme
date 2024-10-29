import { Link } from "react-router-dom";

const FooterSection6 = () => {
  return (
    <footer className="rv-34-footer mt-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="rv-31-footer-wized rv-31-footer-about">
              <Link to="/">
                <img
                  src="assets/img/Software/footer/rv-34-footer-logo.png"
                  alt="footer"
                />
              </Link>
              <p className="rv-31-footer-text">
                Morbi pharetra, eros sed euismod <br /> pellentesque, nulla
                risus lobortis
                <br /> purus, quis maximus.
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

          <div className="col-lg-2 col-md-6 col-sm-6 ">
            <div className="rv-31-footer-wized">
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
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Our Services</h4>
              <ul className="footer-wized-ul">
                <li>
                  <a href="#">Managed Service</a>
                </li>
                <li>
                  <a href="#">Cloud Solution</a>
                </li>
                <li>
                  <a href="#">Network Services</a>
                </li>
                <li>
                  <a href="#">Cyber Security</a>
                </li>
                <li>
                  <a href="#">Backup & Recovery</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="rv-31-footer-wized">
              <h4 className="rv-31-footer-wized__title">Newsletter SignUp</h4>
              <form
                action="#"
                className="rv-32-footer-nwsltr__form rv-34-footer-newsletter "
              >
                <div className="nwsltr-top">
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Enter your Email..."
                  />
                  <button className="rv-34-btn">Subscribe</button>
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
                    I agree to the <a href="contact">Privacy Policy</a>.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="rv-34-footer-bottom mt-95">
            Copyright © {new Date().getFullYear()} All Rights Reserved by{" "}
            <a href="https://themeforest.net/search/codebasket">Codebasket</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection6;

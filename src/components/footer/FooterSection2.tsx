const FooterSection2 = () => {
  return (
    <footer className="rv-34-footer rv-37-footer ">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="rv-31-footer-wized rv-31-footer-about mt-0  pr-100 wow fadeInUp">
              <a href="/">
                <img
                 src="assets/img/Software/logo/code-finity-logo.png"
                 alt="logo"
                 height={100}
                />
              </a>
              <p className="rv-31-footer-text">
                Through a combination of lectures,
                <br /> readings, discussions, students will gain
                <br />
                solid foundation educational.
              </p>
              <div className="rv-31-footer-socials wow fadeInUp">
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
              data-wow-delay="0.25s"
            >
              <h4 className="rv-31-footer-wized__title">Useful Links</h4>
              <ul className="footer-wized-ul">
                <li>
                  <a href="/about">About </a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/contact">Help Center</a>
                </li>
                <li>
                  <a href="/contact">Refund</a>
                </li>
                <li>
                  <a href="/about">Conditions</a>
                </li>
                <li>
                  <a href="/contact">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 col-sm-6">
            <div
              className="rv-31-footer-wized wow fadeInUp"
              data-wow-delay="0.35s"
            >
              <h4 className="rv-31-footer-wized__title">Categories</h4>
              <ul className="footer-wized-ul">
                <li>
                  <a href="#">SaaS Product</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="/projects">Marketing</a>
                </li>
                <li>
                  <a href="/services">Servicing</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
                <li>
                  <a href="#">SaaS Marketing</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div
              className="rv-31-footer-wized wow fadeInUp"
              data-wow-delay="0.45s"
            >
              <h4 className="rv-31-footer-wized__title">Newsletter </h4>
              <p className="rv-36-newsletter__text">
                Sign up foe our newsletter and get <br /> 34% off your next
                course.
              </p>
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
                    I agree to the <a href="/contact">Privacy Policy</a>.
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="rv-34-footer-bottom mt-75 wow fadeInUp">
            Copyright © {new Date().getFullYear()} All Rights Reserved by{" "}
            <a href="/contact">Codebasket</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection2;

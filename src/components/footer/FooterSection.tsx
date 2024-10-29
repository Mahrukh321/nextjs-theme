import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import NewsletterForm2 from "../form/NewsletterForm2";
import { Link } from "react-router-dom";
type Props = {
  style: string;
  logo: string;
};
const FooterSection = ({ style, logo }: Props) => {
  return (
    <footer className={`rv-inner-footer ${style}`}>
      <div className="container">
        <DivAnimateYAxis className="rv-8-footer-middle">
          <div className="row g-4 justify-content-xl-between justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-6 col-12 col-xxs-12">
              <div className="rv-1-footer__about">
                <Link to="/">
                  <img src={logo} alt="Logo"  className="logo" />
                </Link>
                <p className="rv-1-footer__about-txt">
                  Morbi pharetra, eros sed euismod pellentesque, nulla risus
                  lobortis.
                </p>
                <div className="rv-1-socials rv-inner-socials">
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Useful Links</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Latest Work</a>
                  </li>
                  <li>
                    <a href="#">Team Member</a>
                  </li>
                  <li>
                    <a href="#">Latest Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-3 col-6 col-xxs-12">
              <div className="rv-1-footer-widget rv-inner-footer-widget">
                <h5 className="rv-1-footer-widget__title">Our Services</h5>
                <ul className="rv-8-footer-widget__links">
                  <li>
                    <a href="#">SEO Optimization</a>
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
                    <a href="#">Web Analytics</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-5 col-md-6 col-12 col-xxs-12">
              <div className="rv-1-footer-nwsltr">
                <h5 className="rv-1-footer-widget__title">Newsletter Signup</h5>
                <NewsletterForm2 />
              </div>
            </div>
          </div>
        </DivAnimateYAxis>

        <div className="rv-2-footer rv-8-footer-bottom">
          <div className="row gy-3 align-items-center">
            <DivAnimateXAxis position={-60} className="col-md-8">
              <p className="rv-2-copyright rv-1-copyright mb-0 text-center text-md-start">
                &copy; {new Date().getFullYear()} Codebasket All Rights Reserved
                by site
              </p>
            </DivAnimateXAxis>
            <DivAnimateXAxis
              position={60}
              className="col-md-4 text-center text-md-end"
            >
              <div className="rv-2-footer__nav">
                <a href="#">Privacy Policy</a>
                <a href="#">Term of Service</a>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

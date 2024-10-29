import { Link } from "react-router-dom";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const BannerSection5 = () => {
  return (
    <section className="rv-34-banner">
      <img src="assets/img/Software/banner/rv-34-banner.jpg" alt="it service" />
      <div className="rv-34-banner-overlay">
        <div className="container">
          <div className="row overflow-hidden">
            <DivAnimateXAxis position={-60} className="rv-34-banner-content">
              <span className="rv-34-tag text-white ">
                Unmatched IT Expertise
              </span>
              <h1 className="rv-34-banner-title">
                Technology Services
                <br />
                <span>&</span> IT Solutions.
              </h1>
              <p className="rv-34-banner-text">
                Ut a enim aliquam, vehicula sem at, luctus risus. Vestibulum
                ultrices molestie
                <br />
                auctor ornare scelerisque odio rhoncus at.
              </p>
              <div className="rv-34-banner-btns mt-40">
                <Link to="/about" className="rv-34-btn mr-15 ">
                  Learn More
                  <i className="fa-solid fa-arrow-right-long ms-1"></i>
                </Link>
                <Link to="/contact" className="rv-34-btn ">
                  Get in Touch
                  <i className="fa-solid fa-arrow-right-long ms-1 "></i>
                </Link>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BannerSection5;

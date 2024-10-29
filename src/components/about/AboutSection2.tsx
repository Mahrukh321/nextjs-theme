import { Link } from "react-router-dom";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const AboutSection2 = () => {
  return (
    <section className="rv-37-abt mt-85 overflow-hidden">
      <div className="container">
        <div className="rv-37-abt-1">
          <div className="row">
            <DivAnimateXAxis position={-60} className="col-lg-6">
              <div className="rv-37-abt__img">
                <img
                  src="assets/img/Software/about/rv-37-abt-1.png"
                  alt="about"
                />
              </div>
            </DivAnimateXAxis>
            <DivAnimateXAxis className="col-lg-6">
              <div className="rv-37-abt__content">
                <h2 className="rv-37-section-title ">
                  Build for scale and <br />
                  Effortlessly.
                </h2>
                <p className="rv-37-section-header-text">
                  Morbi ut risus libero sed at sollicitudin diam, pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  turpis egestas, laoreet risus ut turpis lacinia, ut posuere
                  enim eleifend, vestibulum tincidunt, nisl tincidunt pulvinar.
                </p>
                <Link to="/contact" className="rv-33-btn rv-37-abt-1-btn mt-25">
                  Get Started
                  <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
        <div className="rv-37-abt-2 mt-15">
          <div className="row">
            <DivAnimateXAxis position={-80} className="col-lg-6 img-order">
              <div className="rv-37-abt__content">
                <h2 className="rv-37-section-title ">
                  Reach Your Audience
                  <br />
                  Shortest Time
                </h2>
                <p className="rv-37-section-header-text">
                  Morbi ut risus libero sed at sollicitudin diam, pellentesque
                  habitant morbi tristique senectus et netus et malesuada fames
                  turpis egestas, laoreet risus ut turpis lacinia.
                </p>
                <ul>
                  <li className="rv-37-abt-2__item mt-25  fadeInUp">
                    <span>1</span>
                    Experienced instructors
                  </li>
                  <li className="rv-37-abt-2__item bb-none mt-10 ">
                    <span>2</span>
                    Training and competition
                  </li>
                </ul>
              </div>
            </DivAnimateXAxis>
            <DivAnimateXAxis position={80} className="col-lg-6 ">
              <div className="rv-37-abt__img">
                <img
                  src="assets/img/Software/about/rv-37-abt-2.png"
                  alt="about"
                />
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection2;

import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import { Link } from "react-router-dom";

const AboutSection3 = () => {
  return (
    <section className="rv-31-about mt-120 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-31-abt-info-1">
            <DivAnimateYAxis className="row">
              <div className="col-lg-6 m-0 p-0 ">
                <div className="rv-31-abt-info-1__img w_img">
                  <img
                    src="assets/img/Software/about/rv-31-abt.jpg"
                    alt="about"
                  />
                </div>
              </div>
              <div className="col-lg-6 m-0 p-0 ">
                <div className="rv-31-abt-info-1-content">
                  <div className="rv-31-abt-info-1__item ">
                    <div className="rv-31-abt-info-1__item-icon ">
                      <img
                        src="assets/img/Software/about/rv-31-abt-1.png"
                        alt="icon"
                      />
                    </div>
                    <div className="rv-31-abt-info-1__item-text">
                      <h6>User Interactive</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of industry's standard.
                      </p>
                    </div>
                  </div>
                  <div className="rv-31-abt-info-1__item ">
                    <div className="rv-31-abt-info-1__item-icon ">
                      <img
                        src="assets/img/Software/about/rv-31-abt-2.png"
                        alt="icon"
                      />
                    </div>
                    <div className="rv-31-abt-info-1__item-text">
                      <h6>Carefully Designed</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of industry's standard.
                      </p>
                    </div>
                  </div>
                  <div className="rv-31-abt-info-1__item ">
                    <div className="rv-31-abt-info-1__item-icon ">
                      <img
                        src="assets/img/Software/about/rv-31-abt-3.png"
                        alt="icon"
                      />
                    </div>
                    <div className="rv-31-abt-info-1__item-text">
                      <h6>Seamless Sync</h6>
                      <p>
                        Lorem Ipsum is simply dummy text of industry's standard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DivAnimateYAxis>
          </div>
        </div>
        <div className="row mt-120 mb-120 rv-31-abt-2">
          <DivAnimateXAxis position={-60} className="col-lg-6 m-0 p-0 ">
            <div className="rv-31-abt-info-2">
              <div className="rv-section-heading mb-40">
                <h2 className="rv-31-sec-title">
                  Build for Scale and Effortlessly
                </h2>
                <span className="rv-31-sec-subtitle">
                  Morbi ut risus libero sed at sollicitudin diam, pellentesque
                  habitant morbi tristique fames turpis egestas.
                </span>
              </div>
              <div className="rv-31-abt-info-1__item abt-info-2__item ">
                <div className="rv-31-abt-info-1__item-icon ">
                  <img
                    src="assets/img/Software/about/rv-31-abt-4.png"
                    alt="icon"
                  />
                </div>
                <div className="rv-31-abt-info-1__item-text abt-info-2__text">
                  <h6>User Interface</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of industry's standard
                    nuillam articies.
                  </p>
                </div>
              </div>
              <div className="rv-31-abt-info-1__item abt-info-2__item ">
                <div className="rv-31-abt-info-1__item-icon ">
                  <img
                    src="assets/img/Software/about/rv-31-abt-5.png"
                    alt="icon"
                  />
                </div>
                <div className="rv-31-abt-info-1__item-text abt-info-2__text">
                  <h6>Creative Process</h6>
                  <p>
                    Lorem Ipsum is simply dummy text of industry's standard
                    nuillam articies.
                  </p>
                </div>
              </div>
              <Link to="/contact" className="rv-31-more-detaisl ">
                More Details
              </Link>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-6 m-0 p-0 ">
            <div className="rv-31-abt-info-1__img w_img">
              <img
                src="assets/img/Software/about/rv-31-abt-img2.png"
                alt="about"
              />
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};
export default AboutSection3;

import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const AboutSection4 = () => {
  return (
    <section className="rv-32-about mt-110 pt-130 pb-135 overflow-hidden">
      <div className="container">
        <div className="row">
          <DivAnimateXAxis position={-60} className="col-lg-6">
            <div className="rv-32-about-contant pr-80">
              <div className="rv-32-section-heading mb-50 ">
                <h2 className="rv-32-sec-title p-rel rv-32-about-vector">
                  Fostering a Superior Marketing Framework.
                  <img
                    src="assets/img/Software/banner/rv-32-shape.png"
                    alt="vector"
                  />
                </h2>
              </div>
              <div className="rv-32-about-item-container">
                <div className="rv-32-about-item ">
                  <h6 className="rv-32-about-item__title">
                    Search Engine Optimization
                  </h6>
                  <a href="/projects" className="rv-32-about-item__btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="rv-32-about-item ">
                  <h6 className="rv-32-about-item__title">
                    Paid Search Marketing
                  </h6>
                  <a href="/projects" className="rv-32-about-item__btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="rv-32-about-item ">
                  <h6 className="rv-32-about-item__title">
                    Conversion Rate Optimization
                  </h6>
                  <a href="/projects" className="rv-32-about-item__btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
                <div className="rv-32-about-item ">
                  <h6 className="rv-32-about-item__title">
                    Social Media Marketing
                  </h6>
                  <a href="/projects" className="rv-32-about-item__btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-6">
            <div className="rv-32-about-img">
              <img
                src="assets/img/Software/about/rv-32-abt-1.png"
                className="wow slideInRight"
                alt="about img"
              />
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};
export default AboutSection4;

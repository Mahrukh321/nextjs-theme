import { serviceData8 } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection4 = () => {
  return (
    <section className="rv-32-service mt-130 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-32-section-heading text-center mb-45 ">
            <h2 className="rv-32-sec-title p-rel">
              Expertise Lies in SEO & <br />
              Marketing Services.
              <img
                src="assets/img/Software/banner/rv-32-shape.png"
                alt="vector"
              />
            </h2>
          </div>
        </div>
        <div className="row">
          {serviceData8.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="rv-32-service-item ">
                <div className="rv-32-service-item__icon">
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
                <a href={item.link}>
                  <h5 className="rv-32-service-item__title">{item.title}</h5>
                </a>
                <p className="rv-32-service-item__text">{item.text}</p>
                <a
                  href={item.link}
                  className="rv-32-banner-content-search rv-32-service-btn"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateYAxis>
    </section>
  );
};
export default ServiceSection4;

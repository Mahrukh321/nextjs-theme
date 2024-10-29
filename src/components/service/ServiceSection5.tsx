import { Link } from "react-router-dom";
import { serviceData9 } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection5 = () => {
  return (
    <section className="rv-33-service mt-110 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-section-heading mb-35">
            <h2 className="rv-section-title text-center">
              Our Cyber Security Services
            </h2>
          </div>
        </div>
        <div className="row">
          {serviceData9.map((item, index) => (
            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
              <div className="rv-28-service-item">
                <div className="rv-28-service-item__icon col-4">
                  <img src={item.iconUrl} alt="icon" />
                </div>
                <div className="rv-28-service-item__content ">
                  <Link to={item.link}>
                    <h6 className="rv-28-service-item__content-title">
                      {item.title}
                    </h6>
                  </Link>
                  <p className="rv-28-service-item__content-text">
                    {item.description}
                  </p>
                  <Link to={item.link} className="rv-33-readMore">
                    More details
                    <i className="fa-light fa-angle-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateYAxis>
    </section>
  );
};
export default ServiceSection5;

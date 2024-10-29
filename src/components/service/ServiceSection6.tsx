import { serviceItems2 } from "../../data/Data";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ServiceSection6 = () => {
  return (
    <div className="rv-34-service mt-120 overflow-hidden">
      <div className="container">
        <div className="row">
          <DivAnimateXAxis
            position={-60}
            className="rv-34-section-heading text-center mb-35"
          >
            <span className="rv-34-tag">What We Do?</span>
            <h2 className="rv-34-section-title">Some Exclusive Service</h2>
          </DivAnimateXAxis>
        </div>
        <DivAnimateYAxis className="row">
          {serviceItems2.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="rv-32-service-item rv-34-service-item">
                <div className="rv-32-service-item__icon">
                  <img src={item.iconUrl} alt="icon" />
                </div>
                <h5 className="rv-32-service-item__title">{item.title}</h5>
                <p className="rv-32-service-item__text">{item.text}</p>
                <div className="rv-34-service-item__overlay">
                  <a href="#">
                    <h5 className="rv-32-service-item__title">{item.title}</h5>
                  </a>
                  <p className="rv-32-service-item__text">{item.text}</p>
                  <a
                    href="#"
                    className="rv-31-blog-item__content-readMore rv-34-view-link"
                  >
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </DivAnimateYAxis>
      </div>
    </div>
  );
};
export default ServiceSection6;

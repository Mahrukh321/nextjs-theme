import { serviceItems } from "../../data/Data";
import React from "react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const ServiceSection2 = () => {
  return (
    <section className="rv-37-service mt-80 mb-120 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-37-section-header mb-35">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-37-section-title text-center">
                Explore Our <br /> Products & Services
              </h2>
            </DivAnimateXAxis>
          </div>
        </div>

        <div className="row">
          {serviceItems.map((item, index) => (
            <DivAnimateYAxis
              className="col-xl-3 col-lg-6 col-md-6"
              key={index}
              duration={1 + 0.5 * index}
            >
              <div className="rv-37-service-item">
                <div className="rv-37-service-item__icon">
                  <img src={item.iconSrc} alt="icon" />
                </div>
                <h5 className="rv-37-service-item__title">
                  {item.title.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </h5>
                <p className="rv-37-service-item__text">{item.text}</p>
                <a href={item.link} className="rv-37-service-item__more">
                  More Details <i className="fa-solid fa-angle-right ms-2"></i>
                </a>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection2;

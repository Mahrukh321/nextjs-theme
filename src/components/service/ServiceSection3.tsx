import { serviceData7 } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const ServiceSection3 = () => {
  return (
    <section className="rv-31-service pt-110 overflow-hidden">
      <div className="container">
        <div className="row">
          <DivAnimateXAxis
            position={-60}
            className="rv-section-heading text-center "
          >
            <h2 className="rv-31-sec-title p-rel">
              How does it Works
              <img
                src="assets/img/Software/service/rv-31-vector.png"
                alt="vector"
              />
            </h2>
            <span className="rv-31-sec-subtitle">
              Morbi ut risus libero sed at sollicitudin diam, pellentesque
              habitant morbi tristique
              <br />
              senectus et netus et malesuada fames turpis egestas.
            </span>
          </DivAnimateXAxis>
        </div>
        <div className="row pt-60">
          {serviceData7.map((item) => (
            <DivAnimateYAxis
              duration={1.1 + 0.5 * item.id}
              className="col-lg-3 col-md-6"
              key={item.id}
            >
              <div className="rv-31-service-item">
                <img src={item.imgSrc} alt="icon" />
                <a href={item.link}>
                  <h6 className="rv-31-service-item__title">{item.title}</h6>
                </a>
                <p className="rv-31-service-item__text">{item.text}</p>
                <a href={item.link} className="rv-31-service-item__readMore">
                  More details
                  <i className="fa-solid fa-angle-right ms-1 "></i>
                </a>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
      <div className="rv-31-service-star ">
        <img src="assets/img/Software/service/rv-31-icon5.png" alt="shape" />
      </div>
    </section>
  );
};
export default ServiceSection3;

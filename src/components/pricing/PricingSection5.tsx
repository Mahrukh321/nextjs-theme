import { Link } from "react-router-dom";
import { pricingPlans } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PricingSection5 = () => {
  return (
    <section className="rv-37-pricing mt-80 overflow-hidden">
      <div className="container">
        <div className="row">
          <DivAnimateYAxis className="rv-37-section-header mb-35">
            <h2 className="rv-37-section-title text-center">
              Choose your Flexible plan
            </h2>
            <p className="rv-37-section-header-text text-center">
              Morbi ut risus libero sed at sollicitudin diam, pellentesque
              habitant morbi tristique senectus
              <br /> et netus et malesuada fames turpis egestas, laoreet risus
              ut turpis lacinia
            </p>
          </DivAnimateYAxis>
        </div>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <DivAnimateYAxis
              duration={1.1 + 0.5 * index}
              className="col-xl-3 col-lg-6 col-md-6"
              key={index}
            >
              <div className="rv-31-pricing-item rv-37-pricing-item">
                <div className="rv-31-pricing-item__plan">
                  <h6 className="rv-31-pricing-item__plan-name">{plan.name}</h6>
                  <span>{plan.description}</span>
                </div>
                <span className="rv-37-divider"></span>
                <div className="rv-31-pricing-item__prices mt-15">
                  <span className="rv-31-pricing-item__price">
                    {plan.price}
                  </span>
                  {plan.monthly && <span className="monthly">/ Monthly</span>}
                </div>

                <ul className="rv-31-pricing-item__list">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className={feature.available ? "" : "disable"}
                    >
                      <i
                        className={
                          feature.available
                            ? "fa-regular fa-check"
                            : "fa-solid fa-xmark"
                        }
                      ></i>
                      {feature.available ? (
                        feature.text
                      ) : (
                        <del>{feature.text}</del>
                      )}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="rv-31-pricing-item__btn rv-37-pricing-item__btn"
                >
                  {plan.btnText}
                </Link>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection5;

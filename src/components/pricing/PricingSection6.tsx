"use client";
import { pricingData4 } from "../../data/Data";
import { useState } from "react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import { Link } from "react-router-dom";

type Props = {
  btnStyle?: string;
  sectionStyle: string;
};
const PricingSection6 = ({ btnStyle, sectionStyle }: Props) => {
  const [activeMonthly, setActiveMonthly] = useState<boolean>(true);
  const toggleMonthly = () => {
    setActiveMonthly(true);
  };
  const toggleAnnually = () => {
    setActiveMonthly(false);
  };
  return (
    <section className={sectionStyle}>
      <div className="container overflow-hidden">
        <div className="row">
          <DivAnimateXAxis
            position={-60}
            className="rv-section-heading text-center "
          >
            <h2 className="rv-31-sec-title ">Our Flexible Pricing Plan</h2>
            <div className="rv-31-pricing-subtitle mt-50 mb-25 ">
              <span>
                20% Off
                <img src="assets/img/Software/pricing/arrow.png" alt="arrow" />
              </span>
              <div className="rv-31-pricing-subtitle-btns">
                <button
                  className={`${
                    activeMonthly
                      ? `btn-monthly ${btnStyle ? btnStyle : ""}`
                      : ""
                  } `}
                  onClick={toggleMonthly}
                >
                  Monthly
                </button>
                <button
                  className={`${
                    activeMonthly
                      ? ""
                      : `btn-monthly ${btnStyle ? btnStyle : ""}`
                  } `}
                  onClick={toggleAnnually}
                >
                  Annually
                </button>
              </div>
            </div>
          </DivAnimateXAxis>
        </div>
        <div className="row">
          {pricingData4.map((item) => (
            <DivAnimateYAxis
              duration={1.1 + 0.5 * item.id}
              className="col-lg-4 col-md-6"
              key={item.id}
            >
              <div className="rv-31-pricing-item ">
                <div className="rv-31-pricing-item__plan">
                  <h6 className="rv-31-pricing-item__plan-name">
                    {item.title}
                  </h6>
                  <span>{item.desc}</span>
                </div>
                <div className="rv-31-pricing-item__prices mt-45">
                  <span className="pricing-dollar">$</span>
                  <span className="rv-31-pricing-item__price">
                    {activeMonthly ? item.monthlyPrice : item.yearlyPrice}
                  </span>
                  <span>/{activeMonthly ? "Monthly" : "Yearly"}</span>
                </div>
                <hr />
                <ul className="rv-31-pricing-item__list">
                  {item.features.map((list, index) => (
                    <li className={list.disabled ? "disable" : ""} key={index}>
                      <i className="fa-regular fa-check"></i>
                      {list.feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="rv-31-pricing-item__btn">
                  Start 30 days Free trial{" "}
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};
export default PricingSection6;

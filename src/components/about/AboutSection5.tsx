"use client";
import { useState } from "react";
import AboutTabPane from "./AboutTabPane";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const AboutSection5 = () => {
  const [activeTab, setActiveTab] = useState<number>(2);
  const toggleTab = (tab: number) => {
    setActiveTab(tab);
  };
  return (
    <section className="rv-33-abt mt-90 overflow-hidden">
      <div className="container rv-33-abt-bg ">
        <div className="row">
          <DivAnimateXAxis position={-60} className="col-lg-7">
            <div className="rv-33-abt-content">
              <div className="rv-section-heading ">
                <h2 className="rv-section-title ">
                  24/7 Cyber Security <br /> Support Center.
                </h2>
              </div>

              <p className="rv-33-abt-content__text">
                Lobortis mattis aliquam faucibus purus in massa. Amet dictum sit{" "}
                <br />
                amet justo donec enim. Eu non diam phasellus vestibulum. Morbi{" "}
                <br /> tristique senectus et netus et malesuada fames.
              </p>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-5">
            <div className="rv-33-abt-1__img">
              <img
                src="assets/img/Software/about/rv-33-abt-1.png"
                alt="data lock"
              />
            </div>
          </DivAnimateXAxis>
          <DivAnimateYAxis className="col-12">
            <div className="rv-33-abt-tab-container">
              <button
                className={`rv-33-tab-btn ${activeTab === 1 ? "active" : ""}`}
                onClick={() => toggleTab(1)}
                id="tab-item-01"
              >
                Infrastructure Security
              </button>
              <button
                className={`rv-33-tab-btn ${activeTab === 2 ? "active" : ""}`}
                onClick={() => toggleTab(2)}
                id="tab-item-02"
              >
                Data Security
              </button>
              <button
                className={`rv-33-tab-btn ${activeTab === 3 ? "active" : ""}`}
                onClick={() => toggleTab(3)}
                id="tab-item-03"
              >
                Cloud-native Security
              </button>
              <button
                className={`rv-33-tab-btn ${activeTab === 4 ? "active" : ""}`}
                onClick={() => toggleTab(4)}
                id="tab-item-04"
              >
                Application Security
              </button>
            </div>
          </DivAnimateYAxis>
        </div>
        <div className="row rv-33-abt-2">
          <div className="rv-33-tab-content">
            <AboutTabPane active={activeTab} tabNo={1} />
            <AboutTabPane active={activeTab} tabNo={2} />
            <AboutTabPane active={activeTab} tabNo={3} />
            <AboutTabPane active={activeTab} tabNo={4} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection5;

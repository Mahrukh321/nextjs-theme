"use client";

import { toggleVideoModalOpen } from "../../redux/features/videoModalSlice";
import { useDispatch } from "react-redux";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const AboutSection6 = () => {
  const dispatch = useDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-34-abt">
      <div className="container">
        <div className="row">
          <DivAnimateYAxis className="col-lg-6">
            <div className="rv-34-abt-imgs">
              <img
                src="assets/img/Software/about/rv-34-abt-1.png"
                className="rv-34-big-img"
                alt="speaker"
              />
              <img
                src="assets/img/Software/about/rv-34-abt-2.png"
                className="rv-34-sm-img"
                alt="speaker"
              />
            </div>
          </DivAnimateYAxis>
          <div className="col-lg-6 overflow-hidden">
            <DivAnimateXAxis className="rv-34-abt-content">
              <div className="rv-34-section-heading mb-35">
                <span className="rv-34-tag">What We Do?</span>
                <h2 className="rv-34-section-title">
                  Made-To-Order IT <br /> Services For Your Firm.
                </h2>
                <p className="rv-34-abt-content__text">
                  Fusce egestas viverra libero eu elementum. Maecenas sit amet
                  lorem nec eros ullamcorper Vivamus finibus lacinia erat,
                  tristique.
                </p>
                <div className="rv-34-abt-content__btns mt-40">
                  <a href="about.html" className="rv-34-btn mr-20">
                    Read More
                    <i className="fa-solid fa-arrow-right-long ms-1"></i>
                  </a>
                  <a
                    className="rv-34-vdo-btn my-video-links"
                    role="button"
                    onClick={openVideoModal}
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                  <span>How it Works</span>
                </div>
              </div>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection6;

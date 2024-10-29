"use client";
import AccordionSection2 from "../accordion/AccordionSection2";
import { useAppDispatch } from "../../redux/hooks";
import { toggleVideoModalOpen } from "../../redux/features/videoModalSlice";
import Stars from "../utils/Stars";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import { Link } from "react-router-dom";

const TestimonialSection = () => {
  const dispatch = useAppDispatch();
  const toggleVideo = () => {
    dispatch(toggleVideoModalOpen());
  };

  return (
    <section className="rv-33-testimonial rv-37-testimonial mb-105 mt-115 overflow-hidden">
      <div className="container">
        <DivAnimateYAxis className="row">
          <div className="rv-37-section-header mb-35">
            <h2 className="rv-37-section-title text-center">
              Here’s what our amazing clients
            </h2>
            <p className="rv-37-section-header-text text-center ">
              Morbi ut risus libero sed at sollicitudin diam, pellentesque
              habitant morbi tristique senectus
              <br /> et netus et malesuada fames turpis egestas, laoreet risus
              ut turpis lacinia
            </p>
          </div>
        </DivAnimateYAxis>

        <DivAnimateYAxis position={70} className="row">
          <div className="col-lg-6 ">
            <div className="rv-33-testimonial-img h-100 ">
              <img
                src="assets/img/Software/testimonial/rv-37-testimonial-img.jpg"
                className="w-100 h-100 "
                alt="person"
              />
              <a
                className="rv-33-testimonial-img__vbtn my-video-links rv-37-testimonial-btn"
                role="button"
                onClick={toggleVideo}
              >
                <i className="fa-solid fa-play me-1 "></i> <span>2m 43s</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="rv-29-testimonial-item rv-37-testimonial-item">
                  <Stars />
                  <p className="rv-29-testimonial-item__text">
                    Morbi nec accumsan diam Maecenas gravida massa acmetus lacus
                    eleifend, at rutrum tellus condimentum arcu et vitae magna
                    maximu,at congue.
                  </p>
                  <div className="rv-29-testimonial-item__author">
                    <img
                      src="assets/img/rv-29-testimonial-img1.jpg"
                      alt="lee mark"
                    />
                    <div className="rv-29-testimonial-item__author-title">
                      <h6>Pelican Steve</h6>
                      <span>@Pelican</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="rv-29-testimonial-item rv-37-testimonial-item">
                  <Stars />
                  <p className="rv-29-testimonial-item__text">
                    Morbi nec accumsan diam Maecenas gravida massa acmetus lacus
                    eleifend, at rutrum tellus condimentum arcu et vitae magna
                    maximu,at congue.
                  </p>
                  <div className="rv-29-testimonial-item__author">
                    <img
                      src="assets/img/rv-29-testimonial-img2.jpg"
                      alt="lee mark"
                    />
                    <div className="rv-29-testimonial-item__author-title">
                      <h6>Lucian Mendel</h6>
                      <span>@Pelican</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>

        <div className="row">
          <div className="rv-37-faq">
            <div className="row">
              <DivAnimateXAxis position={-60} className="col-lg-6">
                <div className="rv-37-abt__content">
                  <h2 className="rv-37-section-title">
                    Frequently <br /> Asked Questions
                  </h2>
                  <p className="rv-37-section-header-text">
                    Morbi ut risus libero sed at sollicitudin diam, pellentesque
                    habitant
                    <br /> morbi tristique senectus et netus et malesuada fames
                    turpis egestas,
                    <br /> laoreet risus ut turpis lacinia,
                  </p>
                  <Link
                    to="/contact"
                    className="rv-33-btn rv-37-abt-1-btn mt-25"
                  >
                    Support
                    <i className="fa-solid fa-angle-right ms-1"></i>
                  </Link>
                </div>
              </DivAnimateXAxis>
              <DivAnimateXAxis className="col-lg-6">
                <AccordionSection2 />
              </DivAnimateXAxis>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection;

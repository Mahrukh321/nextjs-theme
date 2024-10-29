"use client";
import { toggleVideoModalOpen } from "../../redux/features/videoModalSlice";
import { useAppDispatch } from "../../redux/hooks";
import Stars from "../utils/Stars";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection4 = () => {
  const dispatch = useAppDispatch();
  const openVideoModal = () => {
    dispatch(toggleVideoModalOpen());
  };
  return (
    <section className="rv-33-testimonial mb-120 mt-110 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-section-heading text-center mb-35 ">
            <h2 className="rv-section-title ">
              Here’s what our amazing clients
            </h2>

            <p className="rv-33-testimonial-subtitle">
              Morbi ut risus libero sed at sollicitudin diam, pellentesque
              habitant morbi tristique senectus
              <br /> et netus et malesuada fames turpis egestas, laoreet risus
              ut turpis lacinia
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 ">
            <div className="rv-33-testimonial-img ">
              <img
                src="assets/img/Software/testimonial/rv-33-testimonial-img.jpg"
                alt="person"
              />
              <a
                className="rv-33-testimonial-img__vbtn my-video-links"
                role="button"
                onClick={openVideoModal}
              >
                <i className="fa-solid fa-play me-1 "></i> <span>2m 43s</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="rv-29-testimonial-item ">
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
                <div className="rv-29-testimonial-item ">
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
        </div>
      </DivAnimateYAxis>
    </section>
  );
};
export default TestimonialSection4;

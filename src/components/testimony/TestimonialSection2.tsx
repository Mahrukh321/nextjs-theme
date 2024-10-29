"use client";
import { testimonialData6 } from "../../data/Data";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection2 = () => {
  return (
    <section className="rv-31-testimonial mt-110 overflow-hidden">
      <div className="container">
        <div className="row ">
          <div className="rv-section-heading testimonial-heading mb-40">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-31-sec-title">
                What Our Client <br /> Says
              </h2>
            </DivAnimateXAxis>

            <DivAnimateXAxis className="rv-31-testimonial-review">
              <div className="rv-31-testimonial__stars">
                <span>
                  <img
                    src="assets/img/Software/testimonial/rv-27-testimoial-star.png"
                    alt="star"
                  />
                </span>
                <span>
                  <img
                    src="assets/img/Software/testimonial/rv-27-testimoial-star.png"
                    alt="star"
                  />
                </span>
                <span>
                  <img
                    src="assets/img/Software/testimonial/rv-27-testimoial-star.png"
                    alt="star"
                  />
                </span>
                <span>
                  <img
                    src="assets/img/Software/testimonial/rv-27-testimoial-star.png"
                    alt="star"
                  />
                </span>
                <span>
                  <img
                    src="assets/img/Software/testimonial/rv-27-testimoial-star.png"
                    alt="star"
                  />
                </span>
              </div>
              <h6 className="rv-31-rate me-1">4.5</h6>
              <span>Based on User reviews</span>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis className="row">
          <div className="col-lg-4 col-md-5 p-0 m-0 ">
            <div className="rv-31-testimonial__img">
              <img
                src="assets/img/Software/testimonial/rv-27-testimonial.jpg"
                alt="Client"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-7 m-0 p-0 ">
            <Swiper
              className="rv-31-testimonial__feedback"
              slidesPerView={1}
              spaceBetween={50}
              loop
              // autoplay
              navigation={{
                nextEl: ".rv-31-cf-arrow-btn-right",
                prevEl: ".rv-31-cf-arrow-btn-left",
              }}
              modules={[Autoplay, Navigation]}
            >
              {testimonialData6.map((item, index) => (
                <SwiperSlide key={index}>
                  <p className="rv-31-testimonial__text">{item.text}</p>
                  <div className="rv-31-testimonial__client">
                    <h6>{item.clientName}</h6>
                    <span>{item.clientPosition}</span>
                  </div>
                </SwiperSlide>
              ))}
              <div className="rv-31-testimonial__shape">
                <img
                  src="assets/img/Software/testimonial/rv-27-testimonial-shape.png"
                  alt="shape"
                />
              </div>
            </Swiper>
          </div>
          <div className="col-lg-2  m-0 p-0 ">
            <div className="rv-31-testimonial__controllar">
              <button className="rv-31-cf-arrow-btn-left">
                <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
              </button>
              <button className="rv-31-cf-arrow-btn-right">
                <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
              </button>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};
export default TestimonialSection2;

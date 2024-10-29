"use client";
import { testimonials } from "../../data/Data";
import Stars from "../utils/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection3 = () => {
  return (
    <section className="rv-32-testimonial pt-130 pb-140 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-32-section-heading d-flex justify-content-md-between justify-content-center align-items-center  mb-50">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-32-sec-title p-rel">
                Endorsed by Professionals
                <br />
                On Global Scale.
                <img
                  src="assets/img/Software/banner/rv-32-shape.png"
                  alt="vector"
                />
              </h2>
            </DivAnimateXAxis>

            <DivAnimateXAxis className="rv-32-btns">
              <button className="rv-32-about-item__btn rv-32-testimonial-btn-left">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="rv-32-about-item__btn rv-32-testimonial-btn-right">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
      <DivAnimateYAxis className="rv-32-testimonial-slider">
        <Swiper
          className="rv-32-testimonial-swiper-container"
          slidesPerView={5}
          spaceBetween={24}
          autoplay
          freeMode
          loop
          navigation={{
            nextEl: ".rv-32-testimonial-btn-right",
            prevEl: ".rv-32-testimonial-btn-left",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              centeredSlides: true,
              spaceBetween: 15,
              slidesPerView: 1.5,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1600: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay, Navigation]}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rv-29-testimonial-item">
                <Stars />
                <p className="rv-29-testimonial-item__text">{item.text}</p>
                <div className="rv-29-testimonial-item__author">
                  <img src={item.imgSrc} alt={item.alt} />
                  <span>{item.author}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="rv-29-testimonial-rating">
          <span>5.0 </span>
          <span> Out of </span>
          <span> 5.0</span>
          <span> based On</span>
          <a href="#"> 1763 reviews</a>
        </div>
      </DivAnimateYAxis>
    </section>
  );
};
export default TestimonialSection3;

"use client";
import { testimonialData7 } from "../../data/Data";
import Stars from "../utils/Stars";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TestimonialSection5 = () => {
  return (
    <section className="rv-34-testimonial-sec ">
      <div className="container overflow-hidden">
        <DivAnimateYAxis className="row">
          <div className="rv-34-section-heading text-center mb-35">
            <span className="rv-34-tag wow fadeInUp">Testimonials</span>
            <h2 className="rv-34-section-title">
              Customer Feedback <br /> <span>&</span> Comments.
            </h2>
          </div>

          <Swiper
            className="rv-34-testimonial-swiper-container"
            slidesPerView={1}
            spaceBetween={30}
            loop
            autoplay
            navigation={{
              nextEl: ".rv-28-cf-arrow-btn-right",
              prevEl: ".rv-28-cf-arrow-btn-left",
            }}
            pagination={{
              el: ".rv-28-testimonial-count",
              type: "fraction",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                centeredSlides: true,
                spaceBetween: 15,
              },
            }}
            modules={[Autoplay, Navigation, Pagination]}
          >
            {testimonialData7.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rv-28-client-review">
                  <Stars />
                  <p>{item.testimony}</p>
                  <div className="rv-28-author">
                    <h6>{item.author}</h6>
                    <span>{item.authorInfo}</span>
                  </div>
                  <img
                    src="assets/img/rv-colon.png"
                    className="rv-28-colon"
                    alt="colon"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="rv-28-testimonial-controller">
            <button className="rv-28-cf-arrow-btn-left">
              <i className="fa-thin fa-arrow-left-long"></i>
            </button>
            <span className="rv-28-testimonial-count"></span>
            <button className="rv-28-cf-arrow-btn-right">
              <i className="fa-thin fa-arrow-right-long"></i>
            </button>
          </div>
        </DivAnimateYAxis>

        <div className="rv-28-clients">
          <img
            src="assets/img/rv-28-client1.jpg"
            className="rv-28-client__1"
            alt="client"
          />
          <img
            src="assets/img/rv-28-client2.jpg"
            className="rv-28-client__2"
            alt="client"
          />
          <img
            src="assets/img/rv-28-client3.jpg"
            className="rv-28-client__3"
            alt="client"
          />
          <img
            src="assets/img/rv-28-client4.jpg"
            className="rv-28-client__4"
            alt="client"
          />
          <img
            src="assets/img/rv-28-client5.jpg"
            className="rv-28-client__5"
            alt="client"
          />
          <img
            src="assets/img/rv-28-client6.jpg"
            className="rv-28-client__6"
            alt="client"
          />
        </div>
      </div>
    </section>
  );
};
export default TestimonialSection5;

"use client";
import { portfolioData4 } from "../../data/Data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const PortfolioSection3 = () => {
  return (
    <section className="rv-34-gallary overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-34-section-heading d-flex justify-content-md-between justify-content-center align-items-center mb-35">
            <DivAnimateXAxis
              position={-60}
              className="rv-34-section-heading-left"
            >
              <span className="rv-34-tag ">Recent Projects</span>
              <h2 className="rv-34-section-title ">Our Latest Case Studies</h2>
            </DivAnimateXAxis>
            <div className="rv-34-porfolio-slider-controller"></div>
          </div>
        </div>
      </div>
      <DivAnimateYAxis>
        <Swiper
          className="rv-34-portfolio-slider"
          slidesPerView={4}
          spaceBetween={20}
          autoplay
          freeMode
          pagination={{
            el: ".rv-34-porfolio-slider-controller",
            clickable: true,
            bulletClass: "rv-34-porfolio-bullet",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              spaceBetween: 10,
              slidesPerView: 1.5,
              centeredSlides: true,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {portfolioData4.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rv-33-gallary-item rv-34-portfolio-item">
                <img src={item.imgSrc} alt="Person" />
                <div className="rv-33-gallary-item__overlay">
                  <a className="rv-33-gallary-item__overlay-icon my-image-links">
                    <i className="fa-solid fa-plus"></i>
                  </a>
                  <div className="rv-33-gallary-item__overlay-title">
                    <span>{item.title}t</span>
                    <a href="#" className="rv-34-gallary-item__overlay-title">
                      {item.description}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default PortfolioSection3;

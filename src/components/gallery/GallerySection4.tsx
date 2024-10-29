"use client";
import { galleryData6 } from "../../data/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const GallerySection4 = () => {
  return (
    <section className="rv-31-gallary pt-110 pb-90 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-section-heading rv-31-gallary-heading ">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-31-sec-title">
                Beautiful way to present
                <br />
                App screenshots
              </h2>
            </DivAnimateXAxis>
            <DivAnimateXAxis>
              <span className="rv-31-sec-subtitle">
                Lorem Ipsum is simply dummy text the industry's <br />
                standard dummy design Nullam ultricies donec <br /> maximus
                dapibus ex.
              </span>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis>
          <Swiper
            className="rv-31-gallary-slider"
            centeredSlides
            initialSlide={3}
            slidesPerView={5}
            spaceBetween={24}
            freeMode
            pagination={{
              el: ".rv-31-gallary-slider-controller",
              clickable: true,
              bulletClass: "rv-34-porfolio-bullet",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                centeredSlides: true,
                spaceBetween: 15,
                slidesPerView: 1.5,
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
          >
            {galleryData6.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="rv-31-gallary-img">
                  <img src={item.imgSrc} alt={item.imgAlt} />
                </div>
              </SwiperSlide>
            ))}

            <div className="rv-31-gallary-slider-controller text-center "></div>
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};
export default GallerySection4;

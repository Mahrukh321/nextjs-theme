"use client";
import { galleryData5 } from "../../data/Data";
import { toggleLightboxOpen } from "../../redux/features/lightboxSlice";
import { useAppDispatch } from "../../redux/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const GallerySection3 = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="rv-37-gallary pt-115 pb-90 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-37-section-header d-flex justify-content-between  mb-35">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-37-section-title">
                Discover your
                <br /> Super Features
              </h2>
            </DivAnimateXAxis>
            <DivAnimateXAxis>
              <p className="rv-37-section-header-text">
                Ultrices in iaculis nunc sed augue. Luctus <br /> accumsan
                tortor posuere sapien et ligula
                <br /> ullamcorper malesuada.
              </p>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
      <DivAnimateYAxis>
        <Swiper
          className="rv-37-gallary-container"
          slidesPerView={5}
          spaceBetween={24}
          freeMode
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            480: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 20,
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {galleryData5.map((item) => {
            const toggleLightbox = () => {
              dispatch(toggleLightboxOpen(item.img));
            };
            return (
              <SwiperSlide key={item.id}>
                <div className="rv-37-client-img">
                  <img src={item.img} alt="client logo" />
                  <div className="rv-37-client-img__overlay">
                    <a
                      className="rv-37-overlay-icon my-image-links"
                      role="button"
                      onClick={toggleLightbox}
                    >
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <span className="rv-37-overlay-text">{item.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default GallerySection3;

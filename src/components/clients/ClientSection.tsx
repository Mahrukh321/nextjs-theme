"use client";
import { clientImages } from "../../data/Data";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  style?: string;
};
const ClientSection = ({ style }: Props) => {
  return (
    <section className={`${style ? style : ""} overflow-hidden`}>
      <DivAnimateYAxis visible className="container">
        <h5 className="rv-33-client-slider-title wow fadeInUp">
          TRUSTED BY COMPANIES ALL OVER THE WORLD
        </h5>
        <Swiper
          className="rv-33-client-slider"
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 0,
          }}
          slidesPerView={6}
          speed={2000}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            480: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
            768: {
              spaceBetween: 15,
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay]}
        >
          {clientImages.map((img, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <div className="rv-33-client-img">
                <img src={img} alt="client logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default ClientSection;

"use client";
import { blogData9 } from "../../data/Data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection = () => {
  return (
    <section className="rv-37-blog overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-37-section-header mb-35 ">
            <h2 className="rv-37-section-title text-center">
              Latest News & Blog
            </h2>
          </div>
        </div>
        <Swiper
          className="rv-37-blog-slider"
          slidesPerView={3}
          spaceBetween={24}
          autoplay
          freeMode
          loop
          pagination={{
            el: ".rv-37-blog-controller",
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
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {blogData9.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rv-31-blog-item rv-37-blog-item">
                <div className="rv-31-blog-item__img">
                  <a href="#">
                    <img src={item.img} className="w-100 " alt="blog" />
                  </a>
                </div>
                <div className="rv-31-blog-item__content">
                  <span className="rv-31-blog-item__content-date">
                    {item.category}
                  </span>
                  <span className="rv-31-blog-item__content-date">
                    <i className="fa-thin fa-calendar-days"></i>
                    {item.date}
                  </span>
                  <a href="#">
                    <h5 className="rv-31-blog-item__content-title">
                      {item.title}..
                    </h5>
                  </a>
                  <p className="rv-31-blog-item__content-text">
                    Nullam ultricies amet dapibus, vitae scelerisque
                    <br /> scelerisque leo Donec maximus dapibus.
                  </p>
                  <a
                    href="#"
                    className="rv-31-blog-item__content-readMore mb-30"
                  >
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="rv-37-blog-controller"></div>
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default BlogSection;

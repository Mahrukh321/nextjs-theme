"use client";
import { blogData11 } from "../../data/Data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection5 = () => {
  return (
    <section className="rv-34-blog pt-120 pb-90 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-34-section-heading text-center mb-35">
            <span className="rv-34-tag">Blog & News</span>
            <h2 className="rv-34-section-title">Our Latest Findings</h2>
          </div>
        </div>
        <Swiper
          className="rv-34-blog-slider"
          slidesPerView={3}
          spaceBetween={24}
          //   autoplay
          freeMode
          loop
          pagination={{
            el: ".rv-34-blog-controller",
            clickable: true,
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
          modules={[Autoplay, Pagination]}
        >
          {blogData11.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rv-34-blog-item card">
                <div className="rv-34-blog-item__img">
                  <a href={item.link}>
                    <img src={item.imgSrc} className="w-100 " alt="blog page" />
                  </a>
                </div>
                <div className="rv-34-blog-item__content">
                  <a
                    href={item.link}
                    className="rv-34-blog-item__content-title"
                  >
                    {item.title}
                  </a>
                  <hr />
                  <div className="rv-34-blog-item-tags">
                    <div className=" rv-34-blog-item-date_comments m-0 ">
                      <i className="fa-light fa-calendar-days"></i>
                      <span className="me-3 ms-1">{item.date}</span>
                      <br />
                      <i className="fa-sharp fa-regular fa-comments"></i>
                      <span className="me-1 ms-1">
                        {item.comments} Comments
                      </span>
                    </div>
                    <div className="rv-34-blog-share-btn">
                      <i className="fa-sharp fa-regular fa-share-nodes"></i>

                      <div className="rv-34-blog-share-btn-container">
                        {item.socials.map((social, index) => (
                          <a
                            href={social.url}
                            className="rv-34-blog-share-btn-container__item"
                            key={index}
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" className="rv-34-btn">
                  {item.category}
                </a>
              </div>
            </SwiperSlide>
          ))}
          <div className="rv-34-blog-controller mt-45"></div>
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default BlogSection5;

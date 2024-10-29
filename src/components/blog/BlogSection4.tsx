"use client";
import { blogItems2 } from "../../data/Data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection4 = () => {
  return (
    <section className="rv-33-blog overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-section-heading d-flex justify-content-between align-items-center mb-35">
            <DivAnimateXAxis
              position={-60}
              className="rv-33-section-header-left"
            >
              <h2 className="rv-section-title ">Letest News and Blogs</h2>
              <p className="rv-33-blog-section-header-text">
                Morbi ut risus libero sed at sollicitudin diam, pellentesque
                senectus <br /> et netus et malesuada fames turpis egestas.
              </p>
            </DivAnimateXAxis>
            <DivAnimateXAxis>
              <a href="/blog" className="rv-33-btn Premium-plan">
                View All Blogs
                <i className="fa-solid fa-angle-right ms-1"></i>
              </a>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis>
          <Swiper
            className="rv-33-blog-swiper-container"
            slidesPerView={2}
            spaceBetween={30}
            loop
            autoplay
            freeMode
            pagination={{
              el: ".rv-33-blog-controller",
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
                slidesPerView: 1,
              },
              768: {
                spaceBetween: 15,
                slidesPerView: 2,
              },
              992: {
                spaceBetween: 20,
              },
              1400: {
                spaceBetween: 24,
              },
            }}
            modules={[Autoplay, Pagination]}
          >
            {blogItems2.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rv-28-blog-item card p-rel">
                  <div className="rv-28-blog-item__img">
                    <a href="#">
                      <img
                        src={item.imageUrl}
                        className="w-100 "
                        alt="blog-img"
                      />
                    </a>
                  </div>
                  <div className="rv-28-blog-item__card-body card-body">
                    <div className="card-text ">
                      <i className="fa-light fa-calendar-days me-1"></i>
                      <span className="me-4 ">{item.date}</span>
                      <i className="fa-sharp fa-regular fa-comments me-1"></i>
                      <span className="me-2 ">{item.comments} Comments</span>
                    </div>
                    <a href="#">
                      <h4 className="rv-33-blog-title">{item.title}</h4>
                    </a>
                    <p className="card-description">{item.description}</p>
                    <a href="#" className="rv-33-readMore mt-15 mb-10">
                      Read More
                      <i className="fa-light fa-angle-right ms-1"></i>
                    </a>
                  </div>
                  <button className="rv-33-btn rv-33-blog-btn">
                    {item.category}
                  </button>
                </div>
              </SwiperSlide>
            ))}
            <div className="rv-33-blog-controller text-center mt-50"></div>
          </Swiper>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};
export default BlogSection4;

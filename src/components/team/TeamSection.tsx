"use client";
import { teamMembers } from "../../data/Data";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const TeamSection = () => {
  return (
    <section className="rv-32-team pt-130 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-32-section-heading text-center mb-45">
            <h2 className="rv-32-sec-title p-rel rv-32-team-vector">
              Meet The Creative Talents <br />
              That Drive Projects.
              <img
                src="assets/img/Software/banner/rv-32-shape.png"
                className="rv-32-team__vector"
                alt="vector"
              />
            </h2>
          </div>
        </div>
        <Swiper
          className="rv-32-team-slider rv-inner-team-row"
          slidesPerView={3}
          spaceBetween={24}
          autoplay
          freeMode
          pagination={{
            el: ".rv-32-team-controller",
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
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          modules={[Autoplay, Pagination]}
        >
          {teamMembers.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rv-9-member rv-inner-member">
                <div className="rv-9-member__img">
                  <img src={item.imgSrc} alt="Project Image" />
                </div>

                <div className="rv-9-member__txt ms-0 ">
                  <div className="rv-9-member-socials rv-inner-member-socials">
                    <div className="rv-1-speaker__socials rv-32-team-member">
                      {item.socialLinks.map((social, i) => (
                        <a href={social.href} key={i}>
                          <i className={social.iconClass}></i>
                        </a>
                      ))}
                    </div>
                    <div className="rv-9-member-socials__icon">
                      <i className="fa-regular fa-circle-nodes"></i>
                    </div>
                  </div>
                  <h5 className="rv-32-team__title">
                    <a href="#">{item.name}</a>
                  </h5>
                  <span className="rv-3-project__sub-title">{item.title}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="rv-32-team-controller mt-60"></div>
        </Swiper>
      </DivAnimateYAxis>
    </section>
  );
};
export default TeamSection;

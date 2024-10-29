"use client";
import { galleryData7 } from "../../data/Data";
import { toggleLightboxOpen } from "../../redux/features/lightboxSlice";
import { useAppDispatch } from "../../redux/hooks";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const GallerySection6 = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="rv-33-gallary pt-110 pb-120 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-section-heading d-flex justify-content-between align-items-center mb-35">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-section-title ">
                Discover Our Most
                <br /> Recent Projects
              </h2>
            </DivAnimateXAxis>
            <DivAnimateXAxis>
              <p className="rv-33-pricing-subtitle">
                Ultrices in iaculis nunc sed augue. Luctus
                <br /> accumsan tortor posuere sapien et ligula
                <br /> ullamcorper malesuada.
              </p>
            </DivAnimateXAxis>
          </div>
        </div>
      </div>
      <DivAnimateYAxis className="row g-4">
        {galleryData7.map((item) => {
          const openLightbox = (img: string) => {
            dispatch(toggleLightboxOpen(img));
          };
          return (
            <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
              <div className="rv-33-gallary-item">
                <img src={item.imgSrc} alt="data-cloud" />
                <div className="rv-33-gallary-item__overlay">
                  <a
                    className="rv-33-gallary-item__overlay-icon"
                    role="button"
                    onClick={() => openLightbox(item.imgSrc)}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </a>
                  <div className="rv-33-gallary-item__overlay-title">
                    <a href="#">
                      <h6 className="rv-33-gallary-item__title">
                        {item.title}
                      </h6>
                    </a>
                    <span>{item.desc}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </DivAnimateYAxis>
    </section>
  );
};
export default GallerySection6;

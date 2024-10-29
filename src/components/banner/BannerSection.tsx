import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BannerSection = () => {
  return (
    <section className="rv-37-banner overflow-hidden">
      <div className="container">
        <DivAnimateYAxis className="row position-relative z-3">
          <h1 className="rv-37-banner__title mb-45">
            Build Business Software
            <br />
            You Actually Want
          </h1>

          <div className="rv-37-banner__img p-rel wow fadeInUp">
            <img
              src="assets/img/Software/banner/rv-37-banner-img.jpg"
              alt="banner"
            />
            <div className="rv-37-banner-shape">
              <img
                src="assets/img/Software/banner/rv-37-bannerShape.png"
                alt="shape"
              />
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};
export default BannerSection;

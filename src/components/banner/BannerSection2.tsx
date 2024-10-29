import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const BannerSection2 = () => {
  return (
    <section className="rv-31-banner overflow-hidden">
      <div className="container-fluid ">
        <div className="row">
          <DivAnimateXAxis position={-60} className="col-lg-8">
            <div className="rv-31-banner-content">
              <div className="rv-31-banner-text">
                <div className="rv-31-banner-subtitle-container ">
                  <a
                    href="https://www.apple.com/app-store/"
                    className="rv-31-new"
                  >
                    New
                  </a>
                  <span className="rv-31-banner-subtitle">
                    Available platforms on mobile apps
                  </span>
                </div>
                <h1 className="rv-31-banner-title">
                  Control Everything <br />
                  with your app.
                </h1>
                <p className="rv-31-banner-des">
                  Ultrices in iaculis nunc sed augue. Luctus accumsan tortor
                  posuere sapien et ligula ullamcorper malesuada.
                </p>
              </div>

              <div className="rv-31-banner-btns">
                <a
                  href="https://www.apple.com/app-store/"
                  className="download-ios "
                >
                  <i className=" fa-brands fa-apple"></i> Download iOS
                </a>
                <a
                  href="https://play.google.com/store/apps?hl=en&gl=US&pli=1"
                  className="download-android "
                >
                  <img
                    src="assets/img/Software/banner/android-icon.png"
                    className="me-2 "
                    alt="android"
                  />
                  Download Android
                </a>
              </div>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-4">
            <div className="rv-31-banner-img ">
              <img
                src="assets/img/Software/banner/rv-31-mockup.png"
                alt="mockup"
              />
              <div className="rv-31-banner-shape">
                <img
                  src="assets/img/Software/banner/rv-31-shape.png "
                  alt="shape"
                />
              </div>
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};
export default BannerSection2;

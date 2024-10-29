import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const BannerSection3 = () => {
  return (
    <section className="rv-32-banner overflow-hidden">
      <div className="container-fluid ">
        <div className="row">
          <DivAnimateXAxis position={-60} className="col-lg-7">
            <div className="rv-32-banner-content ">
              <h1 className="rv-32-banner-content__title p-rel">
                Elevate Business <br /> Utilizing Search Engine Optimization.
                <img
                  src="assets/img/Software/banner/rv-32-shape.png"
                  alt="shape"
                />
              </h1>

              <form action="#">
                <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                <input
                  type="text"
                  required
                  className="w-100 "
                  placeholder="Enter domain, keyword or Urls"
                />
                <button className="rv-32-banner-content-search">Search</button>
              </form>
              <div className="rv-32-banner-content-btns">
                Populars:
                <a
                  href="https://www.google.com/"
                  className="rv-32-banner-tag ms-3"
                >
                  <img
                    src="assets/img/Software/banner/rv-32-icon1.png"
                    className="me-2 "
                    alt="google"
                  />
                  Google.com
                </a>
                <a
                  href="https://www.facebook.com/"
                  className="rv-32-banner-tag"
                >
                  <img
                    src="assets/img/Software/banner/rv-32-icon2.png"
                    className="me-2 "
                    alt="facebook"
                  />
                  Facebook.com
                </a>
                <a
                  href="https://www.twitter.com/"
                  className="rv-32-banner-tag "
                >
                  <img
                    src="assets/img/Software/banner/rv-32-icon3.png"
                    className="me-2 "
                    alt="twitter"
                  />
                  Twitter.com
                </a>
              </div>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-5">
            <div className="rv-32-banner-img">
              <img
                src="assets/img/Software/banner/rv-32-img.png"
                alt="banner-ser"
              />
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};
export default BannerSection3;

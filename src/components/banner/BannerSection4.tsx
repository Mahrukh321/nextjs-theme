import { Link } from "react-router-dom";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const BannerSection4 = () => {
  return (
    <section className="rv-33-banner overflow-hidden">
      <div className="container-fluid ">
        <div className="row">
          <DivAnimateXAxis position={-60} className="col-lg-6">
            <div className="rv-33-banner-content">
              <div className="rv-33-banner-content__tag">
                <Link to="#" className="update-package">
                  Update Package
                </Link>
                <span>Offer is going on till Friday, $5.39/mo.</span>
              </div>
              <h1 className="rv-33-banner-content__title">
                Your Data's Safety <br /> Is Our Top Priority.
              </h1>
              <p className="rv-33-banner-content__text">
                Ultrices in iaculis nunc sed augue. Luctus accumsan tortor
                <br /> posuere sapien et ligula ullamcorper malesuada.
              </p>
              <div className="rv-33-banner-content__btns">
                <Link to="/contact" className="rv-33-btn Premium-plan ">
                  Select Premium Plan
                  <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
                <Link to="/contact" className="rv-33-btn rv-33-signup ">
                  Sign up- it's Free
                  <i className="fa-solid fa-angle-right ms-1"></i>
                </Link>
              </div>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-6">
            <div className="rv-33-banner-img">
              <img
                src="assets/img/Software/banner/rv-33-img.png"
                alt="banner"
              />
            </div>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};
export default BannerSection4;

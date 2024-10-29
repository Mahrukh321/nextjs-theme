import { Link } from "react-router-dom";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

type Props = {
  active: number;
  tabNo: number;
};
const AboutTabPane = ({ active, tabNo }: Props) => {
  return (
    <DivAnimateYAxis
      className={`rv-33-tab-pane ${active === tabNo ? "active" : ""}`}
    >
      <div className="col-lg-7">
        <div className="rv-33-abt-content ">
          <span className="rv-33-abt-btn ">
            <img src="assets/img/Software/service/rv-33-icon2.png" alt="data" />
          </span>
          <div className="rv-section-heading ">
            <h2 className="rv-section-title ">
              A better Secure Network <br /> for Our Workplace
            </h2>
          </div>

          <p className="rv-33-abt-content__text">
            Morbi ut risus libero sed at sollicitudin diam, pellentesque
            habitant
            <br /> morbi tristique senectus et netus et malesuada fames turpis{" "}
            <br /> egestas, laoreet risus ut turpis lacinia, ut posuere enim
            eleifend,
            <br /> vestibulum tincidunt, nisl tincidunt pulvinar.
          </p>
          <Link to="/contact" className="rv-33-btn Premium-plan mt-30 ">
            Select Premium Plan
            <i className="fa-solid fa-angle-right ms-1"></i>
          </Link>
        </div>
      </div>
      <div className="col-lg-5">
        <div className="rv-33-abt-1__img pt-70">
          <img
            src="assets/img/Software/about/rv-33-abt-2.png"
            alt="data lock"
          />
        </div>
      </div>
    </DivAnimateYAxis>
  );
};
export default AboutTabPane;

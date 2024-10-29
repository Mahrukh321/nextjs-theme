import { teamData8 } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import { Link } from "react-router-dom";

const TeamSection3 = () => {
  return (
    <section className="rv-34-team mb-120">
      <div className="container overflow-hidden">
        <div className="row">
          <div className="rv-34-section-heading d-md-flex justify-content-md-between justify-content-center  align-items-center mb-30">
            <DivAnimateXAxis
              position={-60}
              className="rv-34-section-heading-left"
            >
              <span className="rv-34-tag">Team Members</span>
              <h2 className="rv-34-section-title">Meet Our Leadership</h2>
            </DivAnimateXAxis>
            <DivAnimateXAxis>
              <Link
                to="/team"
                className="rv-31-blog-item__content-readMore rv-34-view-link"
              >
                View All Members
                <i className="fa-solid fa-arrow-right ms-1"></i>
              </Link>
            </DivAnimateXAxis>
          </div>
        </div>
        <div className="row g-4">
          {teamData8.map((item) => (
            <DivAnimateYAxis
              duration={1.1 + 0.5 * item.id}
              className="col-lg-4 col-md-6 col-sm-6"
              key={item.id}
            >
              <div className="rv-34-team-member">
                <div className="rv-34-team-member__img ">
                  <img src={item.imgSrc} className="w-100 " alt="team-member" />
                </div>
                <div className="rv-34-team-member__overlay">
                  <div className="rv-34-team-member__info">
                    <a href="#" className="d-block ">
                      <h6 className="rv-34-team-member__info-name">
                        {item.name}
                      </h6>
                    </a>
                    <span className="rv-34-team-member__info-title">
                      {item.position}
                    </span>
                  </div>
                  <div className="rv-34-team-member__socials">
                    {item.socials.map((social, index) => (
                      <Link to={social.url} key={index}>
                        <i className={social.icon}></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TeamSection3;

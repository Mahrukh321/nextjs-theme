import { Link } from "react-router-dom";
import { projectData } from "../../data/Data";
import CustomImageAnimate from "../utils/CustomImageAnimate";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const ProjectSection = () => {
  return (
    <section className="rv-9-projects">
      <div className="container">
        <div className="rv-inner-projects">
          <DivAnimateYAxis className="row g-xl-4 g-3 row-cols-lg-3 row-cols-sm-2 row-cols-1">
            {projectData.map((item) => (
              <div className="col" key={item.id}>
                <div className="rv-3-project rv-9-project rv-inner-project">
                  <div className="rv-3-project__img">
                    <CustomImageAnimate src={item.img} alt="Project Image" />
                    <div className="rv-3-project__actions">
                      <div className="rv-3-project__actions">
                        <button className="quick-view">
                          <i className="fa-light fa-magnifying-glass"></i>
                        </button>
                        <Link to={`/projects/${item.slug}`}>
                          <i className="fa-light fa-link-simple"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="rv-9-project__txt">
                    <span className="rv-3-project__sub-title">
                      {item.subTitle}
                    </span>

                    <h5 className="rv-9-project__title">
                      <Link to={`/projects/${item.slug}`}>{item.title}</Link>
                    </h5>
                  </div>
                </div>
              </div>
            ))}
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

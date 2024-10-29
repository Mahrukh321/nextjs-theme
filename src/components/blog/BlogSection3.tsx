import { blogItems } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection3 = () => {
  return (
    <section className="rv-32-blog mt-130 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-32-section-heading text-center mb-50">
            <h2 className="rv-32-sec-title ">Latest Blog and News</h2>
          </div>
        </div>
        <div className="row">
          {blogItems.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="rv-31-blog-item rv-32-blog-item">
                <div className="rv-31-blog-item__img">
                  <a href={item.link}>
                    <img src={item.imgSrc} alt="blog" />
                  </a>
                </div>
                <div className="rv-31-blog-item__content">
                  <span className="rv-31-blog-item__content-app">
                    {item.category}
                  </span>
                  <span className="rv-31-blog-item__content-date">
                    <i className="fa-thin fa-calendar-days me-1"></i>
                    {item.date}
                  </span>
                  <a href={item.link} className="d-block ">
                    <h5 className="rv-31-blog-item__content-title">
                      {item.title}
                    </h5>
                  </a>
                  <a
                    href={item.link}
                    className="rv-31-blog-item__content-readMore"
                  >
                    Read More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </DivAnimateYAxis>
    </section>
  );
};
export default BlogSection3;

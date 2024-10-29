import { blogData10 } from "../../data/Data";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const BlogSection2 = () => {
  return (
    <section className="rv-31-blog mt-110 overflow-hidden">
      <DivAnimateYAxis className="container">
        <div className="row">
          <div className="rv-section-heading text-center mb-35">
            <h2 className="rv-31-sec-title">Our Latest Blog Posts</h2>
          </div>
        </div>
        <div className="row">
          {blogData10.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="rv-31-blog-item">
                <div className="rv-31-blog-item__img">
                  <a href={item.link}>
                    <img src={item.imgSrc} alt={item.imgAlt} />
                  </a>
                </div>
                <div className="rv-31-blog-item__content">
                  <span className="rv-31-blog-item__content-app">
                    {item.category}
                  </span>
                  <span className="rv-31-blog-item__content-date">
                    <i className="fa-thin fa-calendar-days"></i>
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
                    Read More <i className="fa-solid fa-angle-right"></i>
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
export default BlogSection2;

import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const GallerySection5 = () => {
  return (
    <section className="rv-32-gallary pb-140 mt-100 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="rv-32-section-heading  mb-50">
            <DivAnimateXAxis position={-60}>
              <h2 className="rv-32-sec-title p-rel">
                The SEO Projects Have <br />
                Now Reached Completion.
                <img
                  src="assets/img/Software/banner/rv-32-shape.png"
                  alt="vector"
                />
              </h2>
            </DivAnimateXAxis>
          </div>
        </div>
        <DivAnimateYAxis className="row">
          <div className="rv-32-gallary-container">
            <div className="rv-32-gallary-img rv-32-gallary-big-img">
              <img
                src="assets/img/Software/gallary/rv-32-big-img.jpg"
                alt="gallary"
              />
              <div className="rv-gallary-img-ovarlay">
                <div className="rv-32-gallary-img-text">
                  <a href="/projects" className="rv-32-gallary-keyword">
                    Keyword Research
                  </a>
                  <a href="#">
                    <h6 className="rv-32-gallary-img-title">
                      Partnership SEO Consulting
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="rv-32-gallary-img">
              <img
                src="assets/img/Software/gallary/rv-32-img2.jpg"
                alt="gallary"
              />
              <div className="rv-gallary-img-ovarlay">
                <div className="rv-32-gallary-img-text">
                  <a href="/projects" className="rv-32-gallary-keyword">
                    Keyword Research
                  </a>
                  <a href="#">
                    <h6 className="rv-32-gallary-img-title">
                      Partnership SEO Consulting
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="rv-32-gallary-img">
              <img
                src="assets/img/Software/gallary/rv-32-img3.jpg"
                alt="gallary"
              />
              <div className="rv-gallary-img-ovarlay">
                <div className="rv-32-gallary-img-text">
                  <a href="/projects" className="rv-32-gallary-keyword">
                    Keyword Research
                  </a>
                  <a href="#">
                    <h6 className="rv-32-gallary-img-title">
                      Partnership SEO Consulting
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="rv-32-gallary-img">
              <img
                src="assets/img/Software/gallary/rv-32-img4.jpg"
                alt="gallary"
              />
              <div className="rv-gallary-img-ovarlay">
                <div className="rv-32-gallary-img-text">
                  <a href="/projects" className="rv-32-gallary-keyword">
                    Keyword Research
                  </a>
                  <a href="#">
                    <h6 className="rv-32-gallary-img-title">
                      Partnership SEO Consulting
                    </h6>
                  </a>
                </div>
              </div>
            </div>
            <div className="rv-32-gallary-img">
              <img
                src="assets/img/Software/gallary/rv-32-img5.jpg"
                alt="gallary"
              />
              <div className="rv-gallary-img-ovarlay">
                <div className="rv-32-gallary-img-text">
                  <a href="/projects" className="rv-32-gallary-keyword">
                    Keyword Research
                  </a>
                  <a href="#">
                    <h6 className="rv-32-gallary-img-title">
                      Partnership SEO Consulting
                    </h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DivAnimateYAxis>
      </div>
    </section>
  );
};
export default GallerySection5;

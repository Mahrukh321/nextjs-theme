import ContactForm from "../form/ContactForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
type Props = {
  innerPage?: boolean;
};
const ContactSection = ({ innerPage }: Props) => {
  return (
    <section
      className={`rv-2-contact ${
        innerPage ? "rv-inner-contact rv-section-spacing" : ""
      }`}
      id="contact"
    >
      <div className="container">
        {innerPage ? (
          <DivAnimateYAxis className="rv-inner-contact-info-cards">
            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-phone"></i>
                </div>
                <h5 className="rv-inner-contact-info__title">
                  Contact Numbers
                </h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="tel:+17602815875">+17602815875</a>
                  </li>
                  <li>
                    <a href="tel:+13464199952">+13464199952</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">Email Address</h5>
              </div>

              <div className="rv-inner-contact-info__bottom">
                <ul className="rv-5-footer-timings">
                  <li>
                    <a href="mailto:info@codefinitysol.com">
                      info@codefinitysol.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rv-inner-contact-info">
              <div className="rv-inner-contact-info__heading">
                <div className="rv-inner-contact-info__icon">
                  <i className="fa-regular fa-clock"></i>
                </div>

                <h5 className="rv-inner-contact-info__title">
                  Hours of Operation
                </h5>
                <span className="value">24/7</span>
              </div>
            </div>
          </DivAnimateYAxis>
        ) : (
          <h2 className="rv-2-section-title rv-text-anime">
            Ready to bring your ideas to life? I'm here to help.
          </h2>
        )}

        <div className="row gy-3 gy-sm-4">
          <DivAnimateXAxis position={-60} className="col-xxl-8 col-lg-7">
            <div
              className={`rv-2-contact__txt ${
                innerPage ? "rv-inner-contact__txt" : ""
              }`}
            >
              <h3 className="rv-2-contact-form-title">Let's Connect.</h3>

              <ContactForm innerPage={innerPage ? true : false} />
            </div>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-xxl-4 col-lg-5" position={60}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.607262170897!2d-95.56598872333296!3d29.96197336106971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640d208be6c5ee5%3A0x87707694ba6a8ba3!2s13038%20Mills%20Creek%20Meadow%20Dr%2C%20Houston%2C%20TX%2077070%2C%20USA!5e0!3m2!1sen!2s!4v1728330112800!5m2!1sen!2s"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

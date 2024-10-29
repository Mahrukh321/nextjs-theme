import CtaForm from "../form/CtaForm";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
type Props = {
  inner?: boolean;
};
const CtaSection = ({ inner }: Props) => {
  return (
    <section
      className={`rv-14-cta ${inner ? "rv-inner-cta" : ""} rv-section-spacing`}
    >
      <div className="container">
        <div className="row g-4 align-items-center overflow-hidden">
          <DivAnimateXAxis position={-60} className="col-lg-6">
            <div className="rv-14-cta__txt">
              <h6 className="rv-1-section__sub-title rv-text-anime">
                Our Newsletter
              </h6>

              <h2 className="rv-1-section__title rv-text-anime mb-0">
                Become a Member For Unique Updates!
              </h2>
            </div>
          </DivAnimateXAxis>
          <DivAnimateXAxis className="col-lg-6">
            <CtaForm />
          </DivAnimateXAxis>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

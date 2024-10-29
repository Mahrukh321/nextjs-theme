import DivAnimateXAxis from "../utils/DivAnimateXAxis";

const CtaSection2 = () => {
  return (
    <div className="call-to-action">
      <div className="container">
        <div className="row">
          <div className="rv-33-call-to-action">
            <div className="rv-section-heading d-flex justify-content-between align-items-center overflow-hidden">
              <DivAnimateXAxis position={-60}>
                <h2 className="rv-section-title ">
                  Get Our Every Update
                  <br />
                  Join With Us.
                </h2>
              </DivAnimateXAxis>
              <DivAnimateXAxis>
                <form action="#">
                  <input
                    type="text"
                    required
                    className="w-100 "
                    placeholder="Enter domain, keyword or Urls"
                  />
                  <button className="rv-33-btn">Search</button>
                </form>
              </DivAnimateXAxis>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CtaSection2;

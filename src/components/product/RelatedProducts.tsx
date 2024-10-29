import { shopData } from "../../data/Data";
import ShopCard from "../shop/ShopCard";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";

const RelatedProducts = () => {
  return (
    <section className="rv-related-prod rv-section-spacing overflow-hidden">
      <div className="container">
        <div className="rv-3-section-heading rv-related-prod-heading">
          <DivAnimateXAxis
            position={-60}
            className="rv-3-section-heading__left"
          >
            <h6 className="rv-7-section__sub-title">New Collection</h6>
            <h2 className="rv-related-prod__title">Featured Products</h2>
          </DivAnimateXAxis>

          <DivAnimateXAxis className="rv-3-section-heading__right">
            <a href="#" className="rv-3-def-btn rv-12-banner__btn">
              Shop all Collections
            </a>
          </DivAnimateXAxis>
        </div>

        <div className="row rv-related-prod-row g-30 justify-content-center rv-12-product--2">
          {shopData.slice(0, 4).map((item) => (
            <DivAnimateYAxis
              duration={1.1 + 0.5 * item.id}
              className="col-xl-3 col-md-4 col-6 col-xxs-12"
              key={item.id}
            >
              <ShopCard
                img={item.img}
                name={item.name}
                prevPrice={item.prevPrice}
                price={item.price}
                discount={item.discount}
                slug={item.slug}
                product={item}
              />
            </DivAnimateYAxis>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;

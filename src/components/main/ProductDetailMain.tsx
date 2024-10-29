"use client";
import { useState } from "react";
import ProductDetailTop from "../product/ProductDetailTop";
import ProductDescription from "../product/ProductDescription";
import ProductReview from "../product/ProductReview";
import { ShopItem } from "../../types";
import DivAnimateXAxis from "../utils/DivAnimateXAxis";
import DivAnimateYAxis from "../utils/DivAnimateYAxis";
import ProductDetailsImageSlider from "../product/ProductDetailsImageSlider";

type Props = {
  item: ShopItem;
};

const ProductDetailMain = ({ item }: Props) => {
  const [activeTab, setActiveTab] = useState<string>("desc");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <section className="rv-product-details rv-section-spacing">
      <div className="container">
        <div className="row g-0 align-items-start justify-content-center">
          <DivAnimateXAxis
            position={-60}
            className="col-lg-6 col-12 col-xxs-12"
          >
            <ProductDetailsImageSlider />
          </DivAnimateXAxis>

          <DivAnimateXAxis className="col-lg-6">
            <ProductDetailTop item={item} />
          </DivAnimateXAxis>

          <DivAnimateYAxis className="col-12">
            <div className="rv-product-details__bottom-txt">
              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "desc" ? "active" : ""
                    }`}
                    id="descr-tab"
                    onClick={() => handleTabClick("desc")}
                  >
                    Description
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "review" ? "active" : ""
                    }`}
                    id="review-tab"
                    onClick={() => handleTabClick("review")}
                  >
                    Reviews
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    activeTab === "desc" ? "show active" : ""
                  }`}
                  id="descr-tab-pane"
                >
                  <ProductDescription />
                </div>

                <div
                  className={`tab-pane fade ${
                    activeTab === "review" ? "show active" : ""
                  }`}
                  id="review-tab-pane"
                >
                  <ProductReview />
                </div>
              </div>
            </div>
          </DivAnimateYAxis>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailMain;

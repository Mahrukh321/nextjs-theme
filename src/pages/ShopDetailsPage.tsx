import { useParams } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import ErrorSection from "../components/error/ErrorSection";
import GallerySection2 from "../components/gallery/GallerySection2";
import ProductDetailMain from "../components/main/ProductDetailMain";
import VideoModal from "../components/modal/VideoModal";
import RelatedProducts from "../components/product/RelatedProducts";
import VideoSection2 from "../components/video/VideoSection2";
import { shopData } from "../data/Data";

const ShopDetailsPage = () => {
  const { slug } = useParams();
  const productInfo = shopData.find((item) => item.slug === slug);
  return (
    <>
      {productInfo ? (
        <>
          <BreadcrumbSection title="Product Details" />
          <ProductDetailMain item={productInfo} />
          <VideoSection2 />
          <RelatedProducts />
          <GallerySection2 />
          <VideoModal videoUrl="https://www.youtube.com/embed/CVHj7Wxhvdo?si=5nyGWxc5y_Rh2HtS" />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};
export default ShopDetailsPage;

import AboutSection3 from "../components/about/AboutSection3";
import BannerSection2 from "../components/banner/BannerSection2";
import BlogSection2 from "../components/blog/BlogSection2";
import FooterSection3 from "../components/footer/FooterSection3";
import GallerySection4 from "../components/gallery/GallerySection4";
import HeaderSection3 from "../components/header/HeaderSection3";
import PricingSection6 from "../components/pricing/PricingSection6";
import ServiceSection3 from "../components/service/ServiceSection3";
import TestimonialSection2 from "../components/testimony/TestimonialSection2";

const AppLandingPage = () => {
  return (
    <main>
      <HeaderSection3 />
      <BannerSection2 />
      <ServiceSection3 />
      <AboutSection3 />
      <GallerySection4 />
      <PricingSection6 sectionStyle="rv-31-pricing mt-110" />
      <TestimonialSection2 />
      <BlogSection2 />
      <FooterSection3 />
    </main>
  );
};
export default AppLandingPage;

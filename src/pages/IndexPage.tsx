import AboutSection2 from "../components/about/AboutSection2";
import BannerSection from "../components/banner/BannerSection";
import BlogSection from "../components/blog/BlogSection";
import ClientSection from "../components/clients/ClientSection";
import FooterSection2 from "../components/footer/FooterSection2";
import GallerySection3 from "../components/gallery/GallerySection3";
import HeaderSection2 from "../components/header/HeaderSection2";
import Lightbox from "../components/modal/Lightbox";
import VideoModal from "../components/modal/VideoModal";
import PricingSection5 from "../components/pricing/PricingSection5";
import ServiceSection2 from "../components/service/ServiceSection2";
import TestimonialSection from "../components/testimony/TestimonialSection";
const IndexPage = () => {
  return (
    <main>
      <HeaderSection2 />
      <BannerSection />
      <ClientSection style="rv-33-clients mt-60" />
      <ServiceSection2 />
      <GallerySection3 />
      <AboutSection2 />
      <PricingSection5 />
      <TestimonialSection />
      <BlogSection />
      <FooterSection2 />
      <Lightbox />

      {/* Modal */}
      <VideoModal videoUrl="https://www.youtube.com/embed/PBDlbSAddAI?si=eIxWZBz39tyL2RdQ" />
    </main>
  );
};
export default IndexPage;

import AboutSection5 from "../components/about/AboutSection5";
import BannerSection4 from "../components/banner/BannerSection4";
import BlogSection4 from "../components/blog/BlogSection4";
import ClientSection from "../components/clients/ClientSection";
import CtaSection2 from "../components/cta/CtaSection2";
import FooterSection5 from "../components/footer/FooterSection5";
import GallerySection6 from "../components/gallery/GallerySection6";
import HeaderSection5 from "../components/header/HeaderSection5";
import Lightbox from "../components/modal/Lightbox";
import VideoModal from "../components/modal/VideoModal";
import PricingSection6 from "../components/pricing/PricingSection6";
import ServiceSection5 from "../components/service/ServiceSection5";
import TestimonialSection4 from "../components/testimony/TestimonialSection4";

const ItSecurityPage = () => {
  return (
    <main>
      <HeaderSection5 />
      <BannerSection4 />
      <ServiceSection5 />
      <AboutSection5 />
      <PricingSection6
        btnStyle="rv-33-btn-monthly"
        sectionStyle="rv-31-pricing rv-33-pricing mb-120 mt-110"
      />
      <GallerySection6 />
      <TestimonialSection4 />
      <ClientSection style="rv-33-clients mb-75" />
      <BlogSection4 />
      <CtaSection2 />
      <FooterSection5 />

      {/* Modal */}
      <Lightbox />
      <VideoModal videoUrl="https://www.youtube.com/embed/Q2W_nNdReXM?si=ytMrX0jPk0xdZaMK" />
    </main>
  );
};
export default ItSecurityPage;

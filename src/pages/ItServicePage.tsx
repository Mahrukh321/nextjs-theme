import AboutSection6 from "../components/about/AboutSection6";
import BannerSection5 from "../components/banner/BannerSection5";
import BlogSection5 from "../components/blog/BlogSection5";
import FooterSection6 from "../components/footer/FooterSection6";
import HeaderSection6 from "../components/header/HeaderSection6";
import SearchFormModal from "../components/modal/SearchFormModal";
import VideoModal from "../components/modal/VideoModal";
import PortfolioSection3 from "../components/portfolio/PortfolioSection3";
import ServiceSection6 from "../components/service/ServiceSection6";
import TeamSection3 from "../components/team/TeamSection3";
import TestimonialSection5 from "../components/testimony/TestimonialSection5";

const ItServicePage = () => {
  return (
    <main>
      <HeaderSection6 />
      <BannerSection5 />
      <ServiceSection6 />
      <AboutSection6 />
      <PortfolioSection3 />
      <TestimonialSection5 />
      <TeamSection3 />
      <BlogSection5 />
      <FooterSection6 />

      {/* Modal */}
      <SearchFormModal />
      <VideoModal videoUrl="https://www.youtube.com/embed/PBDlbSAddAI?si=v8WM4F7YcsE4MMtS" />
    </main>
  );
};
export default ItServicePage;

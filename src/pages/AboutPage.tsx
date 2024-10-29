import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import AboutSection from "../components/about/AboutSection";
import CtaSection from "../components/cta/CtaSection";
import TeamSection5 from "../components/team/TeamSection5";

const AboutPage = () => {
  return (
    <>
      <BreadcrumbSection title="About" currentPage="About Us" />
      <AboutSection btnStyle="rv-inner-about-btn" />
      <TeamSection5 />
      <CtaSection inner />
    </>
  );
};
export default AboutPage;

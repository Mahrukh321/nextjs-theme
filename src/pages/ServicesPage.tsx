import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CtaSection from "../components/cta/CtaSection";
import ServiceSection from "../components/service/ServiceSection";

const ServicesPage = () => {
  return (
    <>
      <BreadcrumbSection title="Services" />
      <ServiceSection />
      <CtaSection inner />
    </>
  );
};
export default ServicesPage;

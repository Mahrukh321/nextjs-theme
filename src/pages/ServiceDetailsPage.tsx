import { useParams } from "react-router-dom";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import ErrorSection from "../components/error/ErrorSection";
import ServiceDetails from "../components/service/ServiceDetails";
import { serviceData2 } from "../data/Data";

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const serviceInfo = serviceData2.find((item) => item.slug === slug);
  return (
    <>
      {serviceInfo ? (
        <>
          <BreadcrumbSection title="Service Details" />
          <ServiceDetails img={serviceInfo?.img} title={serviceInfo?.title} />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};
export default ServiceDetailsPage;

import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CtaSection from "../components/cta/CtaSection";
import ProjectSection from "../components/portfolio/ProjectSection";

const ProjectsPage = () => {
  return (
    <>
      <BreadcrumbSection title="Projects" />
      <ProjectSection />
      <CtaSection inner />
    </>
  );
};
export default ProjectsPage;

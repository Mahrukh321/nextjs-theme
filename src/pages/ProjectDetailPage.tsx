import { useParams } from "react-router-dom";
import { projectData } from "../data/Data";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import ErrorSection from "../components/error/ErrorSection";
import VideoModal from "../components/modal/VideoModal";
import ProjectDetailSection from "../components/portfolio/ProjectDetailSection";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const projectInfo = projectData.find((item) => item.slug === slug);
  return (
    <>
      {projectInfo ? (
        <>
          <BreadcrumbSection title="Project Details" />
          <ProjectDetailSection title={projectInfo.title} id={projectInfo.id} />
          <VideoModal videoUrl="https://www.youtube.com/embed/IibDkSDNL3Y?si=MYzPiMAw66BG0eAO" />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};
export default ProjectDetailPage;

import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import CtaSection from "../components/cta/CtaSection";
import TeamSection2 from "../components/team/TeamSection2";

const TeamPage = () => {
  return (
    <>
      <BreadcrumbSection title="Team Members" />
      <TeamSection2 />
      <CtaSection inner />
    </>
  );
};
export default TeamPage;

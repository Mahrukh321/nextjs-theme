import HeaderSection from "../header/HeaderSection";
import FooterSection from "../footer/FooterSection";
import { Outlet } from "react-router-dom";

const InnerLayout = () => {
  return (
    <main className="rv-14-body">
      <HeaderSection innerHeader />
      <Outlet />
      <FooterSection style="" logo="assets/img/Software/logo/code-finity-logo.png" />
    </main>
  );
};

export default InnerLayout;
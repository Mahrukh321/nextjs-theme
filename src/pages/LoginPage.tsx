import AuthSection from "../components/authentication/AuthSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";

const LoginPage = () => {
  return (
    <>
      <BreadcrumbSection title="Login" />
      <AuthSection login />
    </>
  );
};
export default LoginPage;

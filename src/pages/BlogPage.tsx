import AllBlogSection from "../components/blog/AllBlogSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
const BlogPage = () => {
  return (
    <>
      <BreadcrumbSection title="News And Blog" currentPage="Blog" />
      <AllBlogSection />
    </>
  );
};
export default BlogPage;

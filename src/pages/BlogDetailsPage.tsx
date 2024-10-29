import { useParams } from "react-router-dom";
import BlogDetailSection from "../components/blog/BlogDetailSection";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import ErrorSection from "../components/error/ErrorSection";
import { blogData4 } from "../data/Data";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const blogInfo = blogData4.find((item) => item.slug === slug);
  return (
    <>
      {blogInfo ? (
        <>
          <BreadcrumbSection title="Blog Details" />
          <BlogDetailSection
            img={blogInfo.img}
            title={blogInfo.title}
            id={blogInfo.id}
          />
        </>
      ) : (
        <ErrorSection />
      )}
    </>
  );
};
export default BlogDetailsPage;

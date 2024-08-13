import dynamic from "next/dynamic";
import useGetAllBlogs from "../../../hooks/useGetAllBlogs";
const SingleBlog = dynamic(() => import("../../../components/SingleBlog"), {
  ssr: false,
});
import useGetCategory from '../../../hooks/useGetCategory'
import useGetSingleBlog from "../../../hooks/useGetSingleBlog";

async function BlogDetails({ params }) {
  const queryTitle = params?.queryTitle;
  const { data: blog } = await useGetSingleBlog(queryTitle);
  const categories = await useGetCategory()

// latest 3 blogs
  const blogs = await useGetAllBlogs(3);

  

  return (
    <div>
      <SingleBlog categories={categories} blog={blog} blogs={blogs} />
    </div>
  );
}

export default BlogDetails;

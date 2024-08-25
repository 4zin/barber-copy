import { useContext, useState } from "react";
import PageTitle from "../components/PageTitle";
import { BlogContext } from "../context/blogContext";
import BlogCard from "../components/BlogCard";
import BlogContent from "../components/BlogContent";

export default function Blog() {
  const blogs = useContext(BlogContext);
  const [selectedBlog, setSelectedBlog] = useState<number>(1);

  if (!blogs) throw new Error("Blog must be used within a BlogProvider");

  const handleBlogSelect = (id: number) => {
    setSelectedBlog(id);
  };

  const blogSelected = blogs.find((blog) => blog.id === selectedBlog);

  return (
    <section className="bg-[url('/blog-bg.webp')] bg-fixed bg-center bg-cover min-h-screen py-10 flex justify-evenly items-center">
      <div className="w-[30%]">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            blog={blog}
            onClick={() => handleBlogSelect(blog.id)}
            selected={selectedBlog === blog.id}
          />
        ))}
      </div>

      <div className="w-[30%]">
        {blogSelected ? (
          <BlogContent blog={blogSelected} />
        ) : (
          <p>No blog found</p>
        )}
      </div>
      <PageTitle text="blog" />
    </section>
  );
}

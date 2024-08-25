import { BlogProps } from "../context/blogContext";

export default function BlogContent({ blog }: { blog: BlogProps }) {
  return (
    <div className="bg-[#00000080] mt-20 pb-4">
      <img src={blog.image} alt="" loading="lazy" className="aspect-video" />
      <div className="overflow-y-scroll max-h-[500px] flex flex-col gap-4 p-4">
        <h2 className="text-white text-[28px] font-normal tracling-[1.4px]">
          {blog.title}
        </h2>
        <p className="text-white text-[17px] font-normal tracling-[0.85px]">
          {blog.content}
        </p>
      </div>
    </div>
  );
}

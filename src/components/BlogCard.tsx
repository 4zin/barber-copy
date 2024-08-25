import { BlogProps } from "../context/blogContext";
import { MinusIcon, PlusIcon } from "./icons/Icons";

export default function BlogCard({
  blog,
  onClick,
  selected,
}: {
  blog: BlogProps;
  onClick: () => void;
  selected: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className="border-b border-white flex mb-4 justify-between items-center cursor-pointer"
    >
      <h2 className="text-white text-[25px] font-semibold tracking-[1.25px]">
        {blog.title}
      </h2>
      {selected ? <MinusIcon /> : <PlusIcon />}
    </div>
  );
}

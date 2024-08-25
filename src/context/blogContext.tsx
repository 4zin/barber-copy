import postsJson from "../posts.json";
import { createContext, useState } from "react";

export interface BlogProps {
  id: number;
  title: string;
  image: string;
  content: string;
}

export const BlogContext = createContext<BlogProps[] | undefined>(undefined);

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blogs] = useState<BlogProps[]>(postsJson);

  return <BlogContext.Provider value={blogs}>{children}</BlogContext.Provider>;
}

import { useLocation } from "react-router-dom";

export default function PageTitle({ text }: { text: string }) {
  const location = useLocation();

  return (
    <h2
      className={`text-white text-[52px] font-bold italic tracking-[5.72px] rotate-[270deg] absolute left-[-60px] bottom-[110px] ${
        location.pathname === "/blog" ? "ml-[40px]" : "ml-0"
      }`}
    >
      {text}
    </h2>
  );
}

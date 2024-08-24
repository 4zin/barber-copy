import "@fontsource-variable/public-sans";

import { NavIcon } from "./icons/Icons";

export function NavButtons({ text, link }: { text: string; link: string }) {
  return (
    <a href={link} className="flex gap-1">
      <button className="font-semibold tracking-wider text-base">{text}</button>
      <NavIcon />
    </a>
  );
}

export function BookButton() {
  return (
    <button className="bg-[#000000CC] text-white w-36 py-[10px] px-[15px] border border-white font-semibold tracking-wider">
      book now
    </button>
  );
}

import "@fontsource-variable/public-sans";

import NavIcon from "./icons/Icons";

export default function NavButtons({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <a href={link} className="flex gap-1">
      <button className="font-semibold tracking-wider text-base">{text}</button>
      <NavIcon />
    </a>
  );
}

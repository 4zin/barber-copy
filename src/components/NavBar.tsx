import NavButtons from "./Buttons";

export default function NavBar() {
  return (
    <nav className="bg-[#FFFFFFCC] px-5 py-3 w-[60%] flex flex-col self-end">
      <div className="flex justify-evenly">
        <NavButtons text="home" link="/" />
        <NavButtons text="book now" link="#" />
        <NavButtons text="services" link="/services" />
        <NavButtons text="stylists" link="/stylists" />
        <NavButtons text="blog" link="/blog" />
        <NavButtons text="about us" link="/about-us" />
      </div>
      <div className="border-black border-b"></div>

      <span className="font-semibold tracking-[1.9px] text-base self-end">
        234
      </span>
    </nav>
  );
}

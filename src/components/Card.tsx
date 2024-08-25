import { Link, useLocation } from "react-router-dom";
import { NavIcon } from "./icons/Icons";

export default function Card({
  name,
  profile,
}: {
  name: string;
  profile: string;
}) {
  const location = useLocation();

  return (
    <div className="bg-[#FFFFFFCC] py-[18px] px-[3px]">
      <div className="flex flex-col gap-2">
        <img src={profile} alt={name} loading="lazy" className="aspect-video" />
        <div className="flex flex-col gap-1 justify-center items-center">
          <h2 className="text-[17px] font-semibold tracking-[0.85px]">
            {name}
          </h2>
          <Link
            to={`/stylists/${name}`}
            className={`border border-black px-[25%] ${
              location.pathname === `/stylists/${name}`
                ? "text-white bg-black"
                : ""
            }`}
          >
            <button className="flex gap-1 text-[17px] font-semibold tracking-[0.85px]">
              view
              <NavIcon />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

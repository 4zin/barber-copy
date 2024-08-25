import { useLocation } from "react-router-dom";
import { StylistsProps } from "../context/stylistContext";
import Card from "./Card";

export default function Cards({ stylists }: { stylists: StylistsProps[] }) {
  const location = useLocation();

  return (
    <div
      className={`grid ${
        location.pathname === "/stylists"
          ? "grid-cols-3 w-[50%]"
          : "grid-cols-2 w-[23%]"
      }   gap-4`}
    >
      {stylists.map((stylist) => {
        return (
          <Card
            key={stylist.id}
            name={stylist.name}
            profile={stylist.profile}
          />
        );
      })}
    </div>
  );
}

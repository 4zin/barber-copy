import { StylistsProps } from "../context/stylistContext";
import { BookButton } from "./Buttons";

export default function Profile({
  filteredStylists,
}: {
  filteredStylists: StylistsProps;
}) {
  return (
    <div className="flex flex-col justify-center w-[35%] gap-2">
      <img
        src={filteredStylists.image}
        alt={filteredStylists.name}
        loading="lazy"
      />
      <h2 className="text-4xl text-white font-bold tracking-[1.75px]">
        {filteredStylists.name}
      </h2>
      <BookButton />
    </div>
  );
}

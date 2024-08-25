import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import { useContext, useEffect, useState } from "react";
import { StylistsContext } from "../context/stylistContext";
import Profile from "../components/Profile";
import PageTitle from "../components/PageTitle";

export default function StylistsDetail() {
  const { name } = useParams<{ name: string }>();

  const stylists = useContext(StylistsContext);

  if (!stylists) {
    throw new Error("Stylists must be used within a StylistsProvider");
  }

  const filteredStylists = stylists?.filter(
    (stylist) => stylist.name.toLocaleLowerCase() === name?.toLocaleLowerCase()
  );

  const [background, setBackground] = useState(filteredStylists[0].background);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBackground(filteredStylists[0].background);
    }, 50);

    return () => clearTimeout(timeout);
  }, [filteredStylists]);

  return (
    <section
      className="bg-fixed bg-center bg-cover min-h-screen py-10 transition-all duration-300 ease-in-out"
      style={{ backgroundImage: `url(${background})` }}
    >
      {stylists && stylists.length ? (
        <div className="flex justify-center gap-72 items-center mt-28">
          <Profile filteredStylists={filteredStylists[0]} />
          <Cards stylists={stylists} />
          <PageTitle text="stylists" />
        </div>
      ) : (
        <p>No stylist found</p>
      )}
    </section>
  );
}

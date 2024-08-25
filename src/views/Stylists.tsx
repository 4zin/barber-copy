import { useContext } from "react";
import Cards from "../components/Cards";
import PageTitle from "../components/PageTitle";
import { StylistsContext } from "../context/stylistContext";

export default function Stylists() {
  const stylists = useContext(StylistsContext);

  return (
    <section className="bg-[url('/stylists-background.webp')] bg-cover bg-center h-screen flex flex-col justify-center">
      <div className="flex justify-center mt-20">
        {stylists && stylists.length > 0 ? (
          <Cards stylists={stylists} />
        ) : (
          <p>No stylist found</p>
        )}
      </div>
      <PageTitle text="stylists" />
    </section>
  );
}

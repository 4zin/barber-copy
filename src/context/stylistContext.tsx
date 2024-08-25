import { createContext, useState } from "react";
import stylistsJson from "../stylists.json";

export interface StylistsProps {
  id: number;
  name: string;
  image: string;
  profile: string;
  background: string;
}

export const StylistsContext = createContext<StylistsProps[] | undefined>(
  undefined
);

export function StylistsProvider({ children }: { children: React.ReactNode }) {
  const [stylists] = useState<StylistsProps[]>(stylistsJson);

  return (
    <StylistsContext.Provider value={stylists}>
      {children}
    </StylistsContext.Provider>
  );
}

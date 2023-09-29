import { createContext, ReactNode, useState } from "react";
import compatibilidades from "../data/compatibilidades.json";

export const BuildContext = createContext({});

const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [availableParts, setAvailableParts] = useState("");

  console.log(availableParts);

  return (
    <BuildContext.Provider value={{ compatibilidades, setAvailableParts }}>
      {children}
    </BuildContext.Provider>
  );
};

export default BuildProvider;

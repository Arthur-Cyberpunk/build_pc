import { createContext, ReactNode, useState } from "react";
import compatibilidades from "../data/compatibilidades.json";

export const BuildContext = createContext({});

const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [availableParts, setAvailableParts] = useState("");
  const [step, setStep] = useState(-1);

  console.log(step);

  return (
    <BuildContext.Provider
      value={{
        compatibilidades,
        availableParts,
        setAvailableParts,
        step,
        setStep,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export default BuildProvider;

import { ReactNode, createContext, useRef, useState } from "react";
import compatibilidades from "../data/compatibilidades.json";

export const BuildContext = createContext({});

const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [availableParts, setAvailableParts] = useState<string>("");
  const [step, setStep] = useState<number>(-1);
  const [components, setComponents] = useState<string[]>([]);
  const selectRef = useRef<HTMLSelectElement | null>(null);

  return (
    <BuildContext.Provider
      value={{
        compatibilidades,
        availableParts,
        setAvailableParts,
        step,
        setStep,
        components,
        setComponents,
        selectRef,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export default BuildProvider;

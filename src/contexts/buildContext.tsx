import { ReactNode, createContext, useRef, useState } from "react";
import compatibilitiesPc from "../data/compatibilitiesPc.json";

export const BuildContext = createContext({});

const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [availableParts, setAvailableParts] = useState<string>("");
  const [step, setStep] = useState<number>(-1);
  const [components, setComponents] = useState<string[]>([]);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isNextButtonDisabled, setIsNextButtonDisabled] =
    useState<boolean>(false);
  const [definitiveComponents, setDefinitiveComponents] = useState<string[]>(
    [],
  );
  const [compatibleHd, setCompatibleHd] = useState<boolean>(true);
  const [processor, setProcessor] = useState<string>("");

  return (
    <BuildContext.Provider
      value={{
        compatibilitiesPc,
        availableParts,
        setAvailableParts,
        step,
        setStep,
        components,
        setComponents,
        selectRef,
        selectedOption,
        setSelectedOption,
        isNextButtonDisabled,
        setIsNextButtonDisabled,
        definitiveComponents,
        setDefinitiveComponents,
        compatibleHd,
        setCompatibleHd,
        processor,
        setProcessor,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
};

export default BuildProvider;

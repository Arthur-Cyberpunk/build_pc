import { useContext, useEffect, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import compatibilidades from "../../data/compatibilidades.json";
import * as S from "./styles";

const OptionsPartsPc = () => {
  const [motherBoard, setMotherBoard] = useState<string>("");
  const [currentStep, setCurrentStep] = useState([
    "processadores",
    "memoria_ram",
    "placa_video",
    "hd_ssd",
  ]);

  const { availableParts, setAvailableParts, step }: Record<string, any> =
    useContext(BuildContext);

  const handleSelectChange = (event: any) => {
    const optionMotherBoard = event.target.value;
    setMotherBoard(optionMotherBoard);
  };

  useEffect(() => {
    if (motherBoard === "razor" || "amd" || "intel")
      setAvailableParts(
        compatibilidades.selected_placa_mae[
          motherBoard as keyof typeof compatibilidades.selected_placa_mae
        ],
      );
  }, [motherBoard]);

  console.log(availableParts?.[currentStep[step]]);

  return (
    <>
      <S.Label htmlFor="selecionarOpcao">Selecione a Placa Mãe:</S.Label>
      <S.DropdownSelect id="selecionarOpcao" onChange={handleSelectChange}>
        <S.DropdownOption value=""></S.DropdownOption>
        {compatibilidades?.placa_mae.map((compatibilidade, index) => (
          <>
            <S.DropdownOption value={compatibilidade}>
              {compatibilidade}
            </S.DropdownOption>
          </>
        ))}
      </S.DropdownSelect>
    </>
  );
};

export default OptionsPartsPc;

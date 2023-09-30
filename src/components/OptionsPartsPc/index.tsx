import { useContext, useEffect, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import compatibilidades from "../../data/compatibilidades.json";
import * as S from "./styles";

const OptionsPartsPc = () => {
  const [motherBoard, setMotherBoard] = useState<string>("");

  const currentStep = ["processador", "memoria_ram", "placa_video", "hd_ssd"];
  const component = [
    "Processador",
    "Memoria RAM",
    "Placa de Video",
    "HD & SSD",
  ];

  const {
    availableParts,
    setAvailableParts,
    step,
    components,
    setComponents,
    selectedOption,
    setSelectedOption,
    setIsNextButtonDisabled,
  }: Record<string, any> = useContext(BuildContext);

  const handleSelectChange = (event: any) => {
    const optionMotherBoard = event.target.value;
    setMotherBoard(optionMotherBoard);
    setComponents(optionMotherBoard);
    setIsNextButtonDisabled(true);
  };

  useEffect(() => {
    if (motherBoard === "razor" || "amd" || "intel")
      setAvailableParts(
        compatibilidades.selected_placa_mae[
          motherBoard as keyof typeof compatibilidades.selected_placa_mae
        ],
      );
  }, [motherBoard]);

  const handleSelectComponents = (event: any) => {
    const optionComponents = event.target.value;
    setComponents(optionComponents);
    setSelectedOption(event.target.value);
    setIsNextButtonDisabled(true);
  };

  return (
    <>
      {step < 0 ? (
        <>
          <S.Label htmlFor="selecionarOpcao">Selecione a Placa Mãe:</S.Label>
          <S.DropdownSelect
            id="selecionarOpcao"
            onChange={handleSelectChange}
            value={motherBoard}
          >
            <S.DropdownOption value=""></S.DropdownOption>
            {compatibilidades?.placa_mae.map(
              (compatibilidade: string, index: any) => (
                <S.DropdownOption value={compatibilidade} key={index}>
                  {compatibilidade}
                </S.DropdownOption>
              ),
            )}
          </S.DropdownSelect>
        </>
      ) : (
        <>
          {availableParts?.[currentStep[step]] !== undefined ? (
            <>
              <S.Label htmlFor="selecionarOpcao">
                Selecione a {component[step]}:
              </S.Label>
              <S.DropdownSelect
                id="selecionarOpcao"
                onChange={handleSelectComponents}
                value={selectedOption}
              >
                <S.DropdownOption value=""></S.DropdownOption>
                {availableParts?.[currentStep[step]]?.map(
                  (compatibilidade: string, index: any) => (
                    <S.DropdownOption value={compatibilidade} key={index}>
                      {compatibilidade}
                    </S.DropdownOption>
                  ),
                )}
              </S.DropdownSelect>
            </>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default OptionsPartsPc;

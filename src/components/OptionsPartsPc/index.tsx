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
  }: Record<string, any> = useContext(BuildContext);

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

  const handleSelectComponents = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const optionComponents = event.target.value;
    setComponents((components: string[]) => [...components, optionComponents]);
  };

  //console.log(availableParts?.[currentStep[step]]);
  //console.log(motherBoard);
  console.log(components);

  return (
    <>
      {step < 0 ? (
        <>
          <S.Label htmlFor="selecionarOpcao">Selecione a Placa Mãe:</S.Label>
          <S.DropdownSelect id="selecionarOpcao" onChange={handleSelectChange}>
            <S.DropdownOption value={motherBoard}></S.DropdownOption>
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
                value={components}
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

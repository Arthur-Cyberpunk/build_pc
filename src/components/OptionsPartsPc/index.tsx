import { useContext, useEffect, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";

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
    compatibilitiesPc,
    availableParts,
    setAvailableParts,
    step,
    setComponents,
    selectedOption,
    setSelectedOption,
    setIsNextButtonAble,
    compatibleHd,
    setCompatibleHd,
    processor,
  }: Record<string, any> = useContext(BuildContext);

  const handleSelectMotherBoard = (event: Record<string, any>) => {
    const optionMotherBoard = event.target.value;
    setMotherBoard(optionMotherBoard);
    setComponents(optionMotherBoard);
    setIsNextButtonAble(true);
  };

  const handleSelectComponents = (event: Record<string, any>) => {
    const optionComponents = event.target.value;

    if (optionComponents !== "") {
      setComponents(optionComponents);
      setSelectedOption(event.target.value);
      setIsNextButtonAble(true);
    }
  };

  useEffect(() => {
    if (motherBoard === "razor" || "amd" || "intel")
      setAvailableParts(
        compatibilitiesPc.selected_placa_mae[
          motherBoard as keyof typeof compatibilitiesPc.selected_placa_mae
        ],
      );
  }, [motherBoard]);

  useEffect(() => {
    if (currentStep[step] === "hd_ssd" && processor === "i9") {
      setCompatibleHd(false);
    } else {
      setCompatibleHd(true);
    }
  }, [currentStep]);

  return (
    <>
      {step < 0 ? (
        <S.SelectBox>
          <S.Label htmlFor="selectOption">Selecione a Placa Mãe:</S.Label>
          <S.DropdownSelect
            id="selectOption"
            onChange={handleSelectMotherBoard}
            value={motherBoard}
          >
            <S.DropdownOption value=""></S.DropdownOption>
            {compatibilitiesPc?.placa_mae.map(
              (compatibilidade: string, index: any) => (
                <S.DropdownOption value={compatibilidade} key={index}>
                  {compatibilidade}
                </S.DropdownOption>
              ),
            )}
          </S.DropdownSelect>
        </S.SelectBox>
      ) : (
        <S.SelectBox>
          {availableParts?.[currentStep[step]] !== undefined ? (
            <>
              <S.Label htmlFor="selectOption">
                Selecione a {component[step]}:
              </S.Label>
              <S.DropdownSelect
                id="selectOption"
                onChange={handleSelectComponents}
                value={selectedOption}
              >
                <S.DropdownOption value=""></S.DropdownOption>
                {compatibleHd
                  ? availableParts?.[currentStep[step]]?.map(
                      (compatibility: string, index: any) => (
                        <S.DropdownOption value={compatibility} key={index}>
                          {compatibility}
                        </S.DropdownOption>
                      ),
                    )
                  : compatibilitiesPc?.i9.hd_ssd?.map(
                      (compatibility: string, index: any) => (
                        <S.DropdownOption value={compatibility} key={index}>
                          {compatibility}
                        </S.DropdownOption>
                      ),
                    )}
              </S.DropdownSelect>
            </>
          ) : (
            <S.FinishBox>
              <S.FinishMessage>
                Parabéns, você escolheu suas peças, verifique as peças no quadro
                e se estiver tudo certo, clique no botão abaixo para finalizar!!
              </S.FinishMessage>
              <S.FinishButton>
                <a href="/">Terminar</a>
              </S.FinishButton>
            </S.FinishBox>
          )}
        </S.SelectBox>
      )}
    </>
  );
};

export default OptionsPartsPc;

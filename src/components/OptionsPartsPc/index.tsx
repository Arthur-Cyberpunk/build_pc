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
    definitiveComponents,
  }: Record<string, any> = useContext(BuildContext);

  const handleSelectMotherBoard = (event: Record<string, any>) => {
    const optionMotherBoard = event.target.value;
    setMotherBoard(optionMotherBoard);
    setComponents(optionMotherBoard);
    setIsNextButtonAble(true);
  };

  const handleSelectComponents = (event: Record<string, any>) => {
    const optionComponents = event.target.value;

    console.log(optionComponents);

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
        <>
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
        </>
      ) : (
        <>
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
        </>
      )}
      <S.Table>
        <S.Tr>
          <S.Th>Componentes</S.Th>
          <S.Th>Peças Escolhidas</S.Th>
        </S.Tr>
        <S.Tr>
          <S.Td>Placa Mãe</S.Td>
          <S.Td>{definitiveComponents[0]}</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>Processador</S.Td>
          <S.Td>{definitiveComponents[1]}</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>Memória RAM</S.Td>
          <S.Td>{definitiveComponents[2]}</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>Placa de Vídeo</S.Td>
          <S.Td>{definitiveComponents[3]}</S.Td>
        </S.Tr>
        <S.Tr>
          <S.Td>HD & SSD</S.Td>
          <S.Td>{definitiveComponents[4]}</S.Td>
        </S.Tr>
      </S.Table>
    </>
  );
};

export default OptionsPartsPc;

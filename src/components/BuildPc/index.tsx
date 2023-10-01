import { useContext, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import ComponentsTables from "../ComponentsTables";
import OptionsPartsPc from "../OptionsPartsPc";
import * as S from "./styles";

const Build = () => {
  const [progress, setProgress] = useState<number>(0);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [teste, setTeste] = useState<number>(0);

  const {
    availableParts,
    step,
    setStep,
    setSelectedOption,
    components,
    setComponents,
    isNextButtonAble,
    setIsNextButtonAble,
    definitiveComponents,
    setDefinitiveComponents,
    setProcessor,
  }: Record<string, any> = useContext(BuildContext);

  const handleNext = () => {
    if (progress < 100 && isNextButtonAble && availableParts) {
      setProgress(progress + 20);
      setStep(step + 1);
      setTeste(0);
      setIsNextButtonAble(false);
      setShowErrorMessage(false);
      setProcessor(definitiveComponents[1]);
      setDefinitiveComponents((definitiveComponents: string[]) => [
        ...definitiveComponents,
        components,
      ]);
    } else if (progress === 100) {
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handlePrevious = () => {
    if (progress > 0) {
      setProgress(progress - 20);
      setStep(step - 1);
      setTeste(teste + 1);
      setIsNextButtonAble(true);
      setShowErrorMessage(false);
      const previousSelection = definitiveComponents.pop();
      setSelectedOption(previousSelection);

      if (components.length > 0 && teste <= 0) {
        setComponents(components);
      } else {
        setComponents("");
        setIsNextButtonAble(false);
      }
    }
  };

  return (
    <S.Section>
      <S.Containder>
        <h1>Monte seu configuração</h1>
        <span>
          Selecionar a Placa Mãe, em seguida o Processador, Memória RAM, Placa
          de Vídeo e HD & SSD
        </span>
        <S.ProgressBox>
          <S.ProgressBarContainer>
            <S.ProgressBarFill progress={progress}></S.ProgressBarFill>
          </S.ProgressBarContainer>
          <S.ButtonsContainer>
            <S.ButtonBack progress={progress} onClick={handlePrevious}>
              Voltar
            </S.ButtonBack>
            <S.ButtonSuccess progress={progress} onClick={handleNext}>
              Avançar
            </S.ButtonSuccess>
          </S.ButtonsContainer>
          <OptionsPartsPc />
          {showErrorMessage ? (
            <S.OptionsBox>
              <S.ErrorMessage>
                Selecione uma opção valida para poder avançar
              </S.ErrorMessage>
            </S.OptionsBox>
          ) : (
            <></>
          )}
          <ComponentsTables />
        </S.ProgressBox>
      </S.Containder>
    </S.Section>
  );
};

export default Build;

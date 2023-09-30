import { useContext, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import OptionsPartsPc from "../OptionsPartsPc";
import * as S from "./styles";

const Build = () => {
  const [progress, setProgress] = useState<number>(0);

  const {
    availableParts,
    step,
    setStep,
    setSelectedOption,
    components,
    setComponents,
    isNextButtonDisabled,
    setIsNextButtonDisabled,
    definitiveComponents,
    setDefinitiveComponents,
    setProcessor,
  }: Record<string, any> = useContext(BuildContext);

  const handleNext = () => {
    if (progress < 100 && isNextButtonDisabled && availableParts) {
      setProgress(progress + 20);
      setStep(step + 1);
      setIsNextButtonDisabled(false);
      setDefinitiveComponents((definitiveComponents: string[]) => [
        ...definitiveComponents,
        components,
      ]);
      setProcessor(definitiveComponents[1]);
    }
  };

  const handlePrevious = () => {
    if (progress > 0) {
      setProgress(progress - 20);
      setStep(step - 1);
      setIsNextButtonDisabled(false);

      if (components.length > 0) {
        const previousSelection = definitiveComponents.pop();
        setSelectedOption(previousSelection);
        setComponents([...components]);
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
        </S.ProgressBox>
      </S.Containder>
    </S.Section>
  );
};

export default Build;

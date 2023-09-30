import { useContext, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import OptionsPartsPc from "../OptionsPartsPc";
import * as S from "./styles";

const Build = () => {
  const [progress, setProgress] = useState<number>(0);

  const { availableParts, step, setStep }: Record<string, any> =
    useContext(BuildContext);

  const handleNext = () => {
    if (progress < 100 && availableParts) {
      setProgress(progress + 20);
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (progress > 0) {
      setProgress(progress - 20);
      setStep(step - 1);
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
            <S.ButtonBack onClick={handlePrevious}>Voltar</S.ButtonBack>
            <S.ButtonSuccess onClick={handleNext}>Avançar</S.ButtonSuccess>
          </S.ButtonsContainer>
          <OptionsPartsPc />
        </S.ProgressBox>
      </S.Containder>
    </S.Section>
  );
};

export default Build;

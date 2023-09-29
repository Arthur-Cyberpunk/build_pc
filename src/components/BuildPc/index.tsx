import { useContext, useEffect, useState } from "react";
import { BuildContext } from "../../contexts/buildContext";
import compatibilidades from "../../data/compatibilidades.json";
import * as S from "./styles";

const Build = () => {
  const [motherBoard, setMotherBoard] = useState<string>("");

  const { setAvailableParts }: Record<string, any> = useContext(BuildContext);

  const handleSelectChange = (event: any) => {
    const optionMotherBoard = event.target.value;
    setMotherBoard(optionMotherBoard);
  };

  useEffect(() => {
    setAvailableParts(
      compatibilidades.placa_mae[
        motherBoard as keyof typeof compatibilidades.placa_mae
      ],
    );
  }, [motherBoard]);

  return (
    <S.Section>
      <S.Containder>
        <h1>Monte seu configuração</h1>
        <span>
          Selecionar a Placa Mãe, em seguida o Processador, Memória RAM, Placa
          de Vídeo e HD & SSD
        </span>
        <S.Label htmlFor="selecionarOpcao">Selecione uma opção:</S.Label>
        <S.DropdownSelect id="selecionarOpcao" onChange={handleSelectChange}>
          <S.DropdownOption value=""></S.DropdownOption>
          <S.DropdownOption value="razor">Razor</S.DropdownOption>
          <S.DropdownOption value="amd">Amd</S.DropdownOption>
          <S.DropdownOption value="intel">Intel</S.DropdownOption>
        </S.DropdownSelect>
      </S.Containder>
    </S.Section>
  );
};

export default Build;

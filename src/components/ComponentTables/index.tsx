import { useContext } from "react";
import { BuildContext } from "../../contexts/buildContext";
import * as S from "./styles";

const ComponentsTables = () => {
  const { definitiveComponents }: Record<string, any> =
    useContext(BuildContext);

  return (
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
  );
};

export default ComponentsTables;

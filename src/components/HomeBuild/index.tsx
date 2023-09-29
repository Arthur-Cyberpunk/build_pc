import * as S from "./styles";

const HomeBuild = () => {
  return (
    <S.Section>
      <S.TextInfo>
        <h4>Monte seu PC agora</h4>
        <h1>Bem vindo ao seu montador favorito</h1>
        <p>
          Compre o PC perfeito dos seus sonhos. Preços imbatíveis e muito mais.
        </p>
        <S.Build>
          <a href="/build">Build PC</a>
        </S.Build>
      </S.TextInfo>
    </S.Section>
  );
};

export default HomeBuild;

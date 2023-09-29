import * as S from "./styles";

const HomeBuild = () => {
  return (
    <S.Section>
      <S.TextInfo>
        <h4>Build your pc now</h4>
        <h1>Welcome to your favorite builder pc</h1>
        <p>
          Buy the perfect pc of your dreams. Unbeatable prices, flexible pick-up
          options and much more.
        </p>
        <div className="bookRide">
          <a href="/build">Book Ride</a>
        </div>
      </S.TextInfo>
    </S.Section>
  );
};

export default HomeBuild;

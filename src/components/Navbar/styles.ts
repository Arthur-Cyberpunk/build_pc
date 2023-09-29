import styled from "styled-components";

type Props = {
  open: boolean;
};

export const Header = styled.header`
  width: 100%;
  z-index: 10;
  color: "#000";
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.09);
  opacity: 0.9;

  nav {
    display: flex;
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 2.5rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 765px) {
      padding: 1rem 1rem;
    }
  }
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 3rem;

    @media (max-width: 765px) {
      display: none;
    }
  }

  span {
    color: #3ac245;
  }
`;

export const BuildPages = styled.ul`
  display: flex;
  gap: 2rem;
  font-size: 1.2rem;

  @media (max-width: 765px) {
    display: none;
  }

  li {
    list-style: none;

    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

export const IconSign = styled.i`
  font-size: 1.6rem;
  color: #000;
  background: #fff;
  cursor: pointer;
  display: none;

  @media (max-width: 765px) {
    display: flex;
  }
`;

export const OptionsRoute = styled.div<Props>`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 4rem;
  gap: 2rem;
  display: ${(props) => (props.open ? "flex" : "none")};

  @media (max-width: 765px) {
    padding: 2rem 1rem;
  }

  a {
    font-size: 1rem;
    color: #000;
    text-decoration: none;
  }
`;

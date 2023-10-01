import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  margin-top: 16rem;
  display: flex;
  text-align: center;

  @media (max-width: 992px) {
    margin-top: 12rem;
  }

  @media (max-width: 390px) {
    margin-top: 5rem;
  }
`;

export const TextInfo = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2.5rem;

  h4 {
    font-size: 1.4rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

export const Build = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 1.2rem;

  a {
    background-color: #3ac245;
    border-radius: 3px;
    box-shadow: 0 10px 15px 0 rgba(104, 121, 194, 0.35);
    padding: 1rem 1.6rem;
    border: 2px solid #3ac245;
    text-decoration: none;
    color: #fff;
  }
`;

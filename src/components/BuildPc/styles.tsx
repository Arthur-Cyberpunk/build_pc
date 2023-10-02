import styled from "styled-components";

interface BarProgressProps {
  progress?: number;
}

export const Section = styled.section`
  width: 100%;
  margin-top: 8rem;
`;

export const Containder = styled.div`
  max-width: 60rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  span {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

export const ProgressBox = styled.div`
  width: 100%;
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 2rem;
  background-color: #c0c0c0;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<BarProgressProps>`
  height: 100%;
  background-color: #1e90ff;
  transition: width 0.3s ease-in-out;
  width: ${({ progress }) => progress}%;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
`;

export const ButtonSuccess = styled.button<BarProgressProps>`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.progress !== undefined && props.progress < 100
      ? "#13b113"
      : "#808080"};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
`;

export const ButtonBack = styled.button<BarProgressProps>`
  padding: 10px 20px;
  background-color: ${(props) =>
    props.progress !== undefined && props.progress > 0 ? "#b81c1c" : "#808080"};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;
`;

export const OptionsBox = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 2rem;
`;

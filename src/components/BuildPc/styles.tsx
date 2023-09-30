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
  height: 30px;
  background-color: #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<BarProgressProps>`
  height: 100%;
  background-color: #007bff;
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

export const ButtonSuccess = styled.button`
  padding: 10px 20px;
  background-color: #13b113;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #19861f;
  }
`;

export const ButtonBack = styled.button`
  padding: 10px 20px;
  background-color: #b81c1c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d83c3c;
  }
`;

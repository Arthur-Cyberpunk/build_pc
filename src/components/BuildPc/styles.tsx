import styled from "styled-components";

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

export const Label = styled.label`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const DropdownSelect = styled.select`
  width: 200px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

export const DropdownOption = styled.option`
  background-color: #fff;
  color: #333;
`;

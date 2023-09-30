import styled from "styled-components";

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
  text-transform: uppercase;

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

export const DropdownOption = styled.option`
  background-color: #fff;
  color: #333;
`;

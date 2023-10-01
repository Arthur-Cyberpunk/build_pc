import styled from "styled-components";

export const Label = styled.label`
  font-size: 1.2rem;
  color: #333;
  margin-right: 1rem;
`;

export const DropdownSelect = styled.select`
  width: 25%;
  padding: 10px;
  font-size: 1rem;
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

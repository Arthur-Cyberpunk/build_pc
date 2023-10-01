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
  color: #333;
  text-transform: uppercase;

  &:focus {
    border: 1px solid #007bff;
    outline: none;
  }
`;

export const DropdownOption = styled.option`
  color: #333;
`;

export const FinishBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FinishMessage = styled.span`
  color: #333;
`;

export const FinishButton = styled.button`
  width: 20%;
  background-color: #13b113;
  padding: 15px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease-in-out;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

export const Tr = styled.tr`
  background-color: #f2f2f2;
`;

export const Th = styled.th`
  background-color: #007bff;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  text-transform: uppercase;
`;

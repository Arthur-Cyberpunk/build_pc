import styled from "styled-components";

export const SelectBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: #333;
  font-weight: bold;
  margin-right: 1rem;

  @media (max-width: 992px) {
    margin: 0 0 1rem;
  }
`;

export const DropdownSelect = styled.select`
  width: 25%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #333;
  text-transform: uppercase;

  @media (max-width: 992px) {
    width: 14rem;
  }

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

export const FinishMessage = styled.p`
  margin: 1rem 0;
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

export const FinishButton = styled.button`
  width: 10rem;
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

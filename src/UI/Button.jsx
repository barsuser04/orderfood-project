import React from "react";
import styled from "styled-components";

const Button = ({ bgColor, children }) => {
  return (
    <ButtonStyled bgColor={bgColor}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  border: none;
  align-items: center;
  padding: 10px 24px 10px 16px;
  border: 2px solid #8a2b06;
  /* background-color: #8a2b06; */
  background: ${(props) => props.bgColor};
  border-radius: 20px;
  width: 99px;
  height: 41px;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: #ffffff;
  /* color: #8a2b06; */
  display: flex;
  justify-content: center;
  gap: 5px;
  &:hover {
    background-color: #4d1601;
  }
`;

export default Button;

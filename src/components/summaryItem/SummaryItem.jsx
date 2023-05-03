import React from "react";
import styled from "styled-components";
import Button from "../../UI/Button";
import { ReactComponent as PlusIcon } from "../../assets/icons/plus-icon.svg";
const SummaryItem = () => {
  return (
    <Container>
      <TitleContainer>
        <MealTitle>Sushi</MealTitle>
        <MealDescr>Finest fish and veggies</MealDescr>
        <MealPrice>$22.99</MealPrice>
      </TitleContainer>

      <LabelContainer>
        <Label>
          Amount
          <InputStyled type="number" min={0} />
        </Label>

        <Button bgColor="#8a2b06">
          <PlusIcon />
          add
        </Button>
      </LabelContainer>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 2px solid gray;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0px;
`;

const MealTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
`;

const MealDescr = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;

const MealPrice = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #ad5502;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const InputStyled = styled.input`
  width: 60px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #222222;
  display: flex;
  gap: 10px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-left: 45px;
    margin-top: 10px;
    }
`;

export default SummaryItem;

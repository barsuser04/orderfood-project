import React from "react";
import SummaryItem from "../summaryItem/SummaryItem";
import styled from "styled-components";

const SummaryCard = () => {
  return (
    <Container>
      <SummaryItem />
    </Container>
  );
};

const Container = styled.div`
  width: 1039px;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 40px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 140px;
  margin-bottom: 100px;
`;

export default SummaryCard;

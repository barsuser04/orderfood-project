import React, { memo } from "react";
import styled from "styled-components";
import MealItem from "./mealItem/MealItem";
import { useEffect } from "react";
import { useState } from "react";
import { fetchRequest } from "../../lib/fetchAPI";

const Meals = () => {
  const [meals, setMeals] = useState();

  async function getFoods() {
    try {
      const responce = await fetchRequest("/foods");
      setMeals(responce);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getFoods();
  }, []);

  return (
    <Container>
      {meals?.map((meal) => {
        return <MealItem key={meal._id} meal={meal} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  background-color: #ffff;
  width: 80%;
  margin: 0 auto;
  border-radius: 16px;
  padding: 40px;
`;

export default memo(Meals);

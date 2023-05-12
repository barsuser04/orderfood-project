import React from "react";
import { Modal } from "../../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";
import styled from "styled-components";
import { useContext } from "react";
import { cartContext } from "../../store/cart-context";

const Basket = ({ onToggle }) => {
  const { items, totalPrice } = useContext(cartContext);

  return (
    <Modal onClose={onToggle}>
      <Content>
        {items.length ? (
          <FixedWidthContainer>
            {items.map((item) => {
              if (item.amount > 0) {
                return (
                  <BasketItem
                    key={item._id}
                    id={item._id}
                    title={item.title}
                    price={item.price}
                    amount={item.amount}
                  ></BasketItem>
                );
                return null;
              }
            })}
          </FixedWidthContainer>
        ) : null}

        <TotalAmount onClose={onToggle} totalPrice={totalPrice} />
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 1rem;
`;

const FixedWidthContainer = styled.div`
  max-height: 250px;
  overflow-y: scroll;
`;

export default Basket;

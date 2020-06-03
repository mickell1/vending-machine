import React, { useState } from "react";
import { DivBox, DivName, Img, DivPrice, DivStatus, DivStock } from './SlotItem.style';
import emptyslot from '../../Images/emptyslot.jpeg';

const emptySlotImg = emptyslot

const SlotItem = ({ product, coin, onPurchase }) => {
  const { productImageUrl, name, price, stock } = product;
  let[amount, setAmount] = useState(stock)

  return (
    <DivBox>
      <Img src={amount > 0 ? productImageUrl : emptySlotImg} />
      <DivName>{name || ""}</DivName>
      <DivPrice>{price || ""}</DivPrice>
      <DivStatus
        onClick={() => {
          if (price > coin) return;
          onPurchase(price);
          setAmount(amount > 0 ? amount -=1 : amount);
        }}
        available={name && amount > 0 && coin >= price}
      />
      <DivStock>
        Stock: {amount}
      </DivStock>
    </DivBox>
  );
}

export default SlotItem;

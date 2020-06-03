import React, { useState, useEffect } from "react";
import { Container, Item, Total, Cancel, Change } from './InputCoin.style';

const InputCoin = ({ coin, onCoinChanged }) => {
  const [total, setTotal] = useState(coin);
  const [change, setChange] = useState(0)

  useEffect(() => {
    setTotal(coin);
  }, [coin]);

  const onItemClick = value => {
    const newTotal = total + value;
    setTotal(newTotal);
    onCoinChanged(newTotal);
  };

  const onCancel = () => {
    const newTotal = 0;
    setTotal(newTotal);
    setChange(newTotal)
    onCoinChanged(newTotal);
  };

  const getChange = () => {
    const newChange = total
    const newTotal = 0;
    setChange(newChange);
    setTotal(newTotal);
  }

  return (
    <Container>
      <Item onClick={() => onItemClick(1)}>1p</Item>
      <Item onClick={() => onItemClick(2)}>2p</Item>
      <Item onClick={() => onItemClick(5)}>5p</Item>
      <Item onClick={() => onItemClick(10)}>10p</Item>
      <Item onClick={() => onItemClick(20)}>20p</Item>
      <Item onClick={() => onItemClick(100)}>£1</Item>
      <Item onClick={() => onItemClick(200)}>£2</Item>
      <Total>{total}</Total>
      <Cancel onClick={onCancel}>Cancel</Cancel>
      <Change onClick={getChange}>Get change: {change}</Change>
    </Container>
  );
}

export default InputCoin;
import React, { useState } from "react";
import SlotItem from "../SlotItem/SlotItem";
import { products } from "../../Data/data";
import { Container } from './Machine.style';

const Machine = ({ coin, onPurchase }) => {
  const [productList] = useState(products);

  return (
    <Container>
      {productList &&
        productList.map(productItem => {
          return <SlotItem key={productItem.id} product={productItem} coin={coin} onPurchase={onPurchase} />;
        })}
    </Container>
  );
}

export default Machine;

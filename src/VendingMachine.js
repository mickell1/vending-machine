import React, { useState } from "react";
import Machine from "./Components/Machine/Machine";
import InputCoin from "./Components/InputCoin/InputCoin";
import { Cabinet } from './VendingMachine.style';
import "./VendingMachine.style.js";

const VendingMachine = () => {
  const [coin, setCoin] = useState(0);
  
  const onCoinChanged = total => {
    setCoin(total);
  };

  const onPurchase = price => {
    setCoin(coin - price);
  };
  
  return (
    <Cabinet>
      <Machine coin={coin} onPurchase={onPurchase} />
      <InputCoin coin={coin} onCoinChanged={onCoinChanged} />
    </Cabinet>
  );
}

export default VendingMachine;

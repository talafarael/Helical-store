import React, { useState } from "react";
import CountProduct from "../CountProduct/countProduct";
import { CountContext } from "@/utils/hooks/context";
import Button from "../Button/button";
export default function ButtonContainer() {
  const [count, setCount] = useState<number>(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <CountProduct />
      <Button text="купить" func={() => {}} />
    </CountContext.Provider>
  );
}

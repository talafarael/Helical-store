import React, { useState } from "react";
import CountProduct from "../CountProduct/countProduct";
import { CountContext } from "@/utils/hooks/context";
import Button from "../Button/button";
import { useRouter } from "next/router";
export default function ButtonContainer() {
  const [count, setCount] = useState<number>(0);
  
  const router = useRouter();
  const { id } = router.query;
  const handlerOrder = () => {
    const localOrder: string | null = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    const existingIndex = order.findIndex(
      (elem: { id: string }) => elem.id === id
    );

    if (existingIndex !== -1) {
      order[existingIndex].count +=count;
    } else {
      order.push({ count: count, id: id });
    }

    localStorage.setItem("order", JSON.stringify(order));
  };
  return (
    <CountContext.Provider value={{ count, setCount }}>
      <CountProduct />
      <Button text="купить" func={handlerOrder} />
    </CountContext.Provider>
  );
}

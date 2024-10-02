import React, { useEffect, useState } from "react";
import CountProduct from "../CountProduct/countProduct";
import Button from "../Button/button";
import { useRouter } from "next/router";
import { eventGoogle } from "@/utils/googleEvent";
export default function ButtonContainer() {
  const [count, setCount] = useState<number>(1);
 
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    const localOrder: string | null = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    
    const existingIndex = order.findIndex(
      (elem: { id: string }) => elem.id === id
    );
    
    setCount(existingIndex !== -1 ? order[existingIndex].count : 1);
  }, [id]);
  const handlerOrder = async () => {
    const localOrder: string | null = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    const existingIndex = order.findIndex(
      (elem: { id: string }) => elem.id === id
    );

    if (existingIndex !== -1) {
      order[existingIndex].count = count;
    } else {
      order.push({ count: count, id: id });
    }

    localStorage.setItem("order", JSON.stringify(order));
   
   await  eventGoogle({
      action: 'addToOrder',
    
      id: id as string,
      value: count,
    });
  router.push('/order'); 

  };
  const handlerAdd = () => {
    setCount(count + 1);
  };
  const handlerMinus = () => {
    if ( count > 1) setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <CountProduct
        handlerAdd={handlerAdd}
        handlerMinus={handlerMinus}
        count={count}
      />
      <Button text="купити" func={handlerOrder} />
    </>
  );
}

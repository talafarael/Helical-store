"use client"
import InputContainer from "@/components/InputContainer/inputContainer";
import "./order.scss";
import { useEffect, useState } from "react";
import { getOrder } from "@/api/getApiOrder";
import { IDefaultData, INewData } from "@/type/newData";

const Order = () => {
  const [order,setOrder]=useState<IDefaultData[]>()
   useEffect(()=>{
 new Promise<IDefaultData[]>((resolveInner) => { resolveInner(getOrder())}).then(result=> {
setOrder(result)
});
  },[])
  return (
    <div className="orderContainer">
      <div className="inputContainerOrder">
        <InputContainer />
      </div>
      <div className="cardContainerOrder">card</div>
    </div>
  );
};
export default Order;

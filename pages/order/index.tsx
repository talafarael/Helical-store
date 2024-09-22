"use client";
import InputContainer from "@/components/InputContainer/inputContainer";
import "./order.scss";
import { useEffect, useState } from "react";
import { getOrder } from "@/api/getApiOrder";
import { IDefaultData } from "@/type/newData";
import { OderContext } from "@/utils/hooks/context";
import CardBin from "@/components/CardBin/cardBin";

const Order = () => {
  const [order, setOrder] = useState<IDefaultData[] | undefined>();
  useEffect(() => {
    getOrder().then((result) => {
      console.log(result + "aaaaa");
      setOrder(result);
    });
  }, []);
  return (
    <OderContext.Provider value={{ order, setOrder }}>
      <div className="orderContainer">
        <div className="inputContainerOrder">
          <InputContainer />
        </div>
        <div className="cardContainerOrder">
          {order ? (
            order.map((elemnt: IDefaultData) => (
              <CardBin key={elemnt.id} data={elemnt} />
            ))
          ) : (
            <h1>тут пусто</h1>
          )}
        </div>
      </div>
    </OderContext.Provider>
  );
};
export default Order;

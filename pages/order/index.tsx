"use client";
import InputContainer from "@/components/InputContainer/inputContainer";
import "./order.scss";
import { useEffect, useState } from "react";
import { getOrder } from "@/api/getApiOrder";
import { IDefaultData } from "@/type/newData";
import { OderContext } from "@/utils/hooks/context";
import CardBin from "@/components/CardBin/cardBin";
import { useOrderHandlers } from "@/utils/contextOrder";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.png";
import Link from "next/link";
import Load from "@/components/Load";
import Loading from "../loading";
const Order = () => {
  console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
  const [order, setOrder] = useState<IDefaultData[] | undefined>();
  useEffect(() => {
    getOrder().then((result) => {
      setOrder(result);
    });
  }, []);
  const { handlerAdd, handlerMinus, handlerDelete } = useOrderHandlers(
    order,
    setOrder
  );
  return (
    <OderContext.Provider
      value={{ handlerDelete, order, setOrder, handlerAdd, handlerMinus }}
    >
      {order ? 
      <div className="orderContainer">
        <Link href={"/"} className="buttonBackOrder ">
          <Image src={leftArrow} alt={`load`} width={40} height={40}></Image>
        </Link>
        <div className="inputContainerOrder">
          <InputContainer />
        </div>
        <div className="cardContainerOrder">
          {order && order?.length >= 1 ? (
            order?.map((elemnt: IDefaultData) => (
              <CardBin key={elemnt.id} data={elemnt} />
            ))
          ) : (
            <div className="emptyOrder">
              <h1>тут пусто</h1>
            </div>
          )}
        </div>
      </div>:<Loading/>}
    </OderContext.Provider>
  );
};
export default Order;

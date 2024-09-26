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
import emptyOrderImg from "@/public/basket_12271779.png"
import Loading from "../loading";
const Order = () => {
  console.log(process.env.REACT_APP_FIREBASE_STORAGE_BUCKET);
  const [order, setOrder] = useState<IDefaultData[] | undefined>();
  useEffect(() => {
    getOrder().then((result) => {
      setOrder(result);
    });
  }, []);
  const { handlerAdd, handlerMinus, handlerDelete ,clearOrder } = useOrderHandlers(
    order,
    setOrder
  );
  return (
    <OderContext.Provider
      value={{ handlerDelete, order, setOrder, handlerAdd, handlerMinus, clearOrder }}
    >
      {order ? <div className="orderContainer">{ order.length>=0 ? <>
        <Link href={"/"} className="buttonBackOrder ">
          <Image src={leftArrow} alt={`load`} width={40} height={40}></Image>
        </Link>
        <div className="inputContainerOrder">
          <InputContainer />
        </div>
        <div className="cardContainerOrder">
          {order?.map((element: IDefaultData) => (
              <CardBin key={element.id} data={element} />
            ))}
         
        </div></> 
             :
        <div className="emptyOrder">
          <Image src={emptyOrderImg} alt={`empty order`} width={70} height={70}></Image>
          <h1>Корзина порожня </h1>
         <Link href={`/`} style={{color:"black"}}>  <h3>Перейти до товарів</h3></Link>
          </div>
          }
          </div>
          :
          <Loading/>}
    </OderContext.Provider>
  );
};
export default Order;

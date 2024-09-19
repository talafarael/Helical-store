"use client";
import { IDefaultData } from "@/type/newData";
import React, { useContext } from "react";
import "./cardBin.scss";
import Image from "next/image";
import CountProduct from "../CountProduct/countProduct";
import { OderContext } from "@/utils/hooks/context";


export default function CardBin({ data }: { data: IDefaultData }) {
  const order = useContext(OderContext);
  const handlerAdd = (data: string | undefined) => {
    if (data && order?.order) {
      console.log(data);

      const updatedOrder = order.order.map((element) => {
        if (data == element.id) {
          return {
            ...element,
            count: element.count ++,
          };
        }
        return element;
      });

      order.setOrder(updatedOrder); 
      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };
  const handlerMinus = (data: string | undefined) => {};
  // if (data && order?.order && order.order.count > 1) {
  //   console.log(data);

  //   const updatedOrder = order.order.map((element) => {
  //     if (data == element.id) {
  //       return {
  //         ...element,
  //         count: element.count + 1,
  //       };
  //     }
  //     return element;
  //   });

  //   order.setOrder(updatedOrder); 
  //   localStorage.setItem("order", JSON.stringify(updatedOrder)); 
  // }

  return (
    <div className="conatinerCardBin">
      <div className="cardBinBody">
        <div className="containerBinImg">
          <Image
            src={`/${data.imgMain}`}
            className="imgCardBin"
            alt={``}
            width={100}
            height={100}
          />
        </div>
        <h1 className="cardBinTitle">{data.name}</h1>
        <button className="cutCardBin"></button>
      </div>
      <div className="containerButtonBin">
        <CountProduct
          handlerAdd={handlerAdd}
          id={data.id}
          handlerMinus={handlerMinus}
          count={data.count}
        />
      </div>
    </div>
  );
}

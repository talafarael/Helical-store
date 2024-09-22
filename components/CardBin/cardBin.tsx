"use client";
import { IDefaultData } from "@/type/newData";
import React, { useContext } from "react";
import "./cardBin.scss";
import Image from "next/image";
import CountProduct from "../CountProduct/countProduct";
import { OderContext } from "@/utils/hooks/context";
import closeImg from "../../public/close-window.png";
export default function CardBin({ data }: { data: IDefaultData }) {
  const order = useContext(OderContext);

  return (
    <div className="conatinerCardBin">
      <div className="cardBinBody">
        <div className="containerBinImg">
          <Image
            src={`/${data.imgMain}`}
            className="imgCardBin"
            alt={`load`}
            width={100}
            height={100}
          />
        </div>
        <h1 className="cardBinTitle">{data.name}</h1>
        <button
          className="cutCardBin"
          onClick={() => order?.handlerDelete(data.id) || (() => {})}
        >
          <Image src={closeImg} alt="" className="closeImg" />
        </button>
      </div>
      <div className="containerButtonBin">
        <CountProduct
          handlerAdd={order?.handlerAdd || (() => {})}
          id={data.id}
          handlerMinus={order?.handlerMinus || (() => {})}
          count={data.count}
        />
      </div>
    </div>
  );
}

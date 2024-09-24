"use client";
import { IDefaultData } from "@/type/newData";
import React, { useContext } from "react";
import "./cardBin.scss";
import Image from "next/image";
import CountProduct from "../CountProduct/countProduct";
import { OderContext } from "@/utils/hooks/context";
import closeImg from "../../public/close-window.png";
import Link from "next/link";
export default function CardBin({ data }: { data: IDefaultData }) {
  const order = useContext(OderContext);

  return (
    <div className="conatinerCardBin">
      <div className="cardBinBody">
        <div className="containerBinImg">
          <Link href={`/product/${data.id}`}>
            <Image
              src={`/${data.imgMain}`}
              className="imgCardBin"
              alt={`load`}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Link href={`/product/${data.id}`} className="cardBinTextContainer">
          <h1 className="cardBinTitle">{data.name}</h1>
          <p className="cardBinDescription">{data.description}</p>
        </Link>
        <div className="cutCardBinContainer">
          <button
            className="cutCardBin"
            onClick={() => order?.handlerDelete(data.id) || (() => {})}
          >
            <Image src={closeImg} alt="" className="closeImg" />
          </button>
        </div>
      </div>
      <div className="containerButtonBin">
        <h1 className="cardBinPrice">{+data.price * data.count}-грн</h1>
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

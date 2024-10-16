"use client";
import { IDefaultData } from "@/type/newData";
import React, { useContext, useState } from "react";
import "./cardBin.scss";
import Image from "next/image";
import CountProduct from "../CountProduct/countProduct";
import { OderContext } from "@/utils/hooks/context";
import closeImg from "../../public/close-window.png";
import hryvnia from "@/public/hrivnaRed.svg";
import Link from "next/link";
import stub from "@/public/img/noImage.png";
import SpinnerLoader from "../spinnerLoader";
import parse from "html-react-parser";
export default function CardBin({ data }: { data: IDefaultData }) {
  const order = useContext(OderContext);
  const [imgLoad, setImgLoad] = useState(false);
  return (
    <div className="conatinerCardBin">
      <div className="cardBinBody">
        <div className="containerBinImg">
          <Link href={`/product/${data.id}`}>
            <Image
              onLoad={() => {
                setImgLoad(true);
              }}
              src={
                data.img && data.img.length > 0 ? `/img/${data.img[0]}` : stub
              }
              className="imgCardBin"
              alt={`load`}
              width={100}
              height={100}
            />
          </Link>
          {!imgLoad && <SpinnerLoader />}
        </div>
        <Link href={`/product/${data.id}`} className="cardBinTextContainer">
          <h1 className="cardBinTitle">{data.name}</h1>
          <div className="lineCardBin"></div>
          <p className="cardBinDescription">
            {data?.desc && parse(data.desc)}
            </p>
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
        {data.price ? (
          <h1 className="cardBinPrice">
            {+data.price * data.count}
            <Image src={hryvnia} alt="грн" height={15} width={10}></Image>
          </h1>
        ) : (
          <p className="cardBinPrice">Невідома ціна </p>
        )}
        <CountProduct
          stylePhone={"true"}
          handlerAdd={order?.handlerAdd || (() => {})}
          id={data.id}
          handlerMinus={order?.handlerMinus || (() => {})}
          count={data.count}
        />
      </div>
    </div>
  );
}

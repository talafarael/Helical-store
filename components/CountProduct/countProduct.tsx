"use client";
import React from "react";
import "./countProduct.scss";

interface ICountProduct {
  count: number;
  handlerMinus: (data?: string) => void;
  handlerAdd: (data?: string) => void;
  id?: string;
  stylePhone?: string
}
export default function CountProduct({
  count,
  id,
  handlerMinus,
  stylePhone,
  handlerAdd,
}: ICountProduct) {
  
  return (
    <div className={`${ stylePhone&&"countContainerOrder"} countContainer `}>
      <>
        <button
          className={` ${stylePhone&&"buttonLeftOrder"} buttonLeft`}
          onClick={() => (handlerMinus(id))}
        >
          -
        </button>
        <h1 className={`countText ${ stylePhone&&"countTextOrder"}`}>{count}</h1>
        <button
          className={`buttonRight ${ stylePhone&&"buttonRightOrder"}`}
          onClick={() =>  handlerAdd(id)}
        >
          +
        </button>
      </>
    </div>
  );
}

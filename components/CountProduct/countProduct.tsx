"use client";
import React from "react";
import "./countProduct.scss";

interface ICountProduct {
  count: number;
  handlerMinus: (data?: string) => void;
  handlerAdd: (data?: string) => void;
  id?: string;
}
export default function CountProduct({
  count,
  id,
  handlerMinus,
  handlerAdd,
}: ICountProduct) {
  
  return (
    <div className="countContainer">
      <>
        <button
          className="buttonLeft"
          onClick={() => (id ? handlerMinus(id) : handlerMinus())}
        >
          -
        </button>
        <h1 className="countText">{count}</h1>
        <button
          className="buttonRight"
          onClick={() => (id ? handlerAdd(id) : handlerAdd())}
        >
          +
        </button>
      </>
    </div>
  );
}

import React, { useContext } from "react";
import "./countProduct.scss";
import { CountContext } from "@/utils/hooks/context";
export default function CountProduct() {
  const count = useContext(CountContext);
  const handlerAdd = () => {
    if (count) count.setCount(++count.count);
  };
  const handlerMinus = () => {
    if (count && count.count > 0) count.setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="countContainer">
      {count ? (
        <>
          <button className="buttonLeft" onClick={handlerMinus}>
            -
          </button>
          <h1 className="countText">{count.count}</h1>
          <button className="buttonRight" onClick={handlerAdd}>
            +
          </button>
        </>
      ) : null}
    </div>
  );
}

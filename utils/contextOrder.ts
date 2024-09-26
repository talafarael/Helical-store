import { IDefaultData } from "@/type/newData";
import React from "react";

export const useOrderHandlers = (
  order: IDefaultData[] | undefined | string[],

  setOrder: React.Dispatch<
    React.SetStateAction<IDefaultData[] | undefined | string[]>
  >
) => {
  const handlerAdd = (data: string | undefined) => {
    if (data && order) {
      console.log(data);

      const updatedOrder = order.map((element) => {
        if (typeof element != "string" && data == element.id) {
          return {
            ...element,
            count: ++element.count,
          };
        }
        return element;
      });

      setOrder(updatedOrder as IDefaultData[]);

      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };
  const handlerMinus = (id: string | undefined) => {
    if (id && order) {
      const updatedOrder = order.map((element) => {
        if (
          typeof element != "string" &&
          id == element.id &&
          element.count > 1
        ) {
          return {
            ...element,
            count: --element.count,
          };
        }
        return element;
      });

      setOrder(updatedOrder as IDefaultData[]);
      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };

  const handlerDelete = (id: string | undefined) => {
    if (id && order) {
      const updatedOrder = order.filter(
        (element) => typeof element != "string" && id !== element.id
      );

      setOrder(updatedOrder as IDefaultData[]);

      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };
  const clearOrder = () => {
    setOrder(["", ""]);
    localStorage.removeItem("order");
  };
  return { handlerAdd, handlerMinus, handlerDelete, clearOrder };
};

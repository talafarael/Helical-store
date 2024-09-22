import { IDefaultData } from "@/type/newData";
import React from "react";

export const useOrderHandlers = (
  order: IDefaultData[] | undefined,
  setOrder: React.Dispatch<React.SetStateAction<IDefaultData[] | undefined>>
) => {
  const handlerAdd = (data: string | undefined) => {
    if (data && order) {
      console.log(data);

      const updatedOrder = order.map((element) => {
        if (data == element.id) {
          return {
            ...element,
            count: ++element.count,
          };
        }
        return element;
      });

      setOrder(updatedOrder);

      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };
  const handlerMinus = (id: string | undefined) => {
    if (id && order) {
      const updatedOrder = order.map((element) => {
        if (id == element.id && element.count > 1) {
          return {
            ...element,
            count: --element.count,
          };
        }
        return element;
      });

      setOrder(updatedOrder);
      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };

  const handlerDelete = (id: string | undefined) => {
    if (id && order) {
      console.log(id);

      const updatedOrder = order.filter((element) => id !== element.id);

      setOrder(updatedOrder);

      localStorage.setItem("order", JSON.stringify(updatedOrder));
    }
  };

  return { handlerAdd, handlerMinus, handlerDelete };
};

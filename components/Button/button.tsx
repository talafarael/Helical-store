import React, { useContext } from "react";
import "./button.scss";
import { CountContext } from "@/utils/hooks/context";
import { useRouter } from "next/router";
interface IButton {
  text: string;
  func: () => void;
}
export default function Button(data: IButton) {
  const count = useContext(CountContext);
  const router = useRouter();
  const { id } = router.query;
  const handlerOrder = () => {
    const localOrder: string | null = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    const existingIndex = order.findIndex(
      (elem: { id: string }) => elem.id === id
    );

    if (existingIndex !== -1) {
      order[existingIndex].count += count?.count 
    } else {
      order.push({ count: count?.count, id: id });
    }

    localStorage.setItem("order", JSON.stringify(order));
  };
  return (
    <button className="button" onClick={handlerOrder}>
      {data.text}
    </button>
  );
}

import React from "react";
import "./DeliverItem.scss";
import { IDeliver } from "@/type/newData";
import Image from "next/image";
export default function DeliverItem({ deliver, deliverImg }: IDeliver) {
  return (
    <article className="deliverItemContainer">
      <Image
        src={`/${deliverImg}`}
        className="deliverImg"
        alt="ic"
        width={25}
        height={25}
      />

      <p className="deliverItemText">{deliver}</p>
    </article>
  );
}

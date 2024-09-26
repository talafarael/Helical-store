import React from "react";
import "./DeliverItem.scss";
import { IDeliver } from "@/type/newData";
import Image from "next/image";
export default function DeliverItem({ deliver, deliverImg }: IDeliver) {
  return (
    <div className="deliverLiContainer">
      <Image
        src={`/${deliverImg}`}
        className="deliverImg"
        alt="ic"
        width={20}
        height={20}
      />
      
      <div className="liTextDeliver">{deliver}</div>
    </div>
  );
}

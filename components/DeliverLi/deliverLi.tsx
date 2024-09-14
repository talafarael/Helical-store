import React from "react";
import "./DeliverLi.scss";
import { IDeliver } from "@/type/newData";
export default function Deliver({ deliver, deliverImg }: IDeliver) {
  return <div className="liTextDeliver">{deliver}</div>;
}

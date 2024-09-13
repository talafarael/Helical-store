import React from "react";
import DeliverImg from "../../public/delivery-truck.png";
import DeliverLi from "../DeliverLi/deliverLi";
import Image from "next/image";
import "./deliver.scss";
export default function Deliver({ deliver }: { deliver: string[] }) {
  return (
    <div>
      <div className="deliverTitle">
        <Image alt="" src={DeliverImg} className="imgDeliver"></Image>
        <h1>способи доставки</h1>
      </div>
      <div className="lineDeliver"></div>
      <ul className="ulTextDeliver">
        {deliver.map((element, index) => (
          <DeliverLi key={index} text={element} />
        ))}
      </ul>
    </div>
  );
}

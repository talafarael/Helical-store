import React from "react";
import DeliverImg from "../../public/delivery-truck.png";
import DeliverLi from "../DeliverLi/deliverLi";
import Image from "next/image";
import "./deliver.scss";
import { IDeliver } from "@/type/newData";
export default function Deliver({
  deliver,
}: {
  deliver: IDeliver[] | undefined;
}) {
  console.log(deliver);
  return (
    <div className="deliverContainer">
      <div className="deliverTitle">
        <Image alt="" src={DeliverImg} className="imgDeliver"></Image>
        <h2 className="deliverText">способи доставки</h2>
      </div>
      <div className="lineDeliver"></div>
      {deliver ? (
        <div className="ulTextDeliver">
          {deliver.map((element, index) => (
            <DeliverLi
              key={index}
              deliver={element.deliver}
              deliverImg={element.deliverImg}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

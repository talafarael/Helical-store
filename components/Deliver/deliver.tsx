import React from "react";
import DeliverImg from "@/public/logistics-truck-svgrepo-com.svg";
import DeliverItem from "../DeliverItem/deliverItem";
import Image from "next/image";
import "./deliver.scss";

export default function Deliver() {
  const deliver = [{
    deliver:"Нова пошта",
    deliverImg:"Nova_Poshta_2019_symbol.svg"
  }];
  return (
    <div className="deliverContainer">
      <div className="deliverTitle">
        <Image alt="" src={DeliverImg} className="imgDeliver"></Image>
        <h2 className="deliverText">Способи доставки</h2>
      </div>
      <div className="lineDeliver"></div>
      {deliver && (
        <div className="ulTextDeliver">
          {deliver?.map((element, index) => (
            <DeliverItem
              key={index}
              deliver={element.deliver}
              deliverImg={element.deliverImg}
            />
          ))}
        </div>
      )}
    </div>
  );
}

import React from "react";
import "./textCard.scss";

import hryvnia from "@/public/hrivnaRed.svg";
import { INewData } from "@/type/newData";

import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";
import Description from "../Description";
import Image from "next/image";

export default function TextCard({ newData }: { newData: INewData | null }) {
  return (
    <>
      {newData && (
        <div className="textContainer">
          <h1 className="nameCard">{newData.name}</h1>
          <h6 className="description">Опис</h6>

          <p className="descDescription"> {newData?.description}</p>

          <div className="buttonContainer">
            <h1 className="priceCard">
              {newData.price}
              <Image src={hryvnia} width={20} height={20} alt="грн"></Image>
            </h1>
            <ButtonContainer />
          </div>

          <Deliver deliver={newData.deliver} />
          <div className="line"></div>
          <Description newData={newData} />
        </div>
      )}
    </>
  );
}

import React from "react";
import "./textCard.scss";

import hryvnia from "@/public/hrivnaRed.svg";
import { INewData } from "@/type/newData";

import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";
import Description from "../Description";
import Image from "next/image";
import parse from "html-react-parser";

export default function TextCard({ newData }: { newData: INewData | null }) {
  return (
    <>
      {newData && (
        <div className="textContainer">
          <h1 className="nameCard">{newData.name}</h1>
          <div className="linedesc"></div> <h6 className="description">Опис</h6>
          <p className="descDescription">
            {" "}
            {newData?.desc && parse(newData?.desc)}
          </p>
          <div className="buttonContainer">
            {newData.price && (
              <h1 className="priceCard">
                {newData.price}
                <Image src={hryvnia} width={20} height={20} alt="грн"></Image>
              </h1>
            )}
            <ButtonContainer />
          </div>
          <Deliver />
          <div className="line"></div>
          <Description newData={newData} />
        </div>
      )}
    </>
  );
}

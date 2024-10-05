import React from "react";
import "./textCard.scss";

import hryvnia from "@/public/ukraine-hryvnia-icon.svg";
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
          <h4></h4>
          <h4 className="index">{newData?.index}</h4>
          <div className="buttonContainer">
            <h1 className="priceCard">
              {newData.price}
              <Image src={hryvnia} width={20} height={20} alt="грн"></Image>
            </h1>

            <ButtonContainer />
          </div>
          <h6 className="description">опис</h6>
          <p className="descDescription"> {newData?.description}</p>
          <Deliver deliver={newData.deliver} />
          <div className="line"></div> <Description newData={newData} />
        </div>
      )}
</>
  );
}

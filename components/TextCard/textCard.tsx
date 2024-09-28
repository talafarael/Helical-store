"use client";
import React from "react";
import "./textCard.scss";

import StarRating from "../StarRating/starRating";
import { INewData } from "@/type/newData";

import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";
import Description from "../Description";

export default function TextCard({ newData }: { newData: INewData | null }) {
  return (
    <div>
      {newData && (
        <div className="textContainer">
          <h1 className="nameCard">{newData.name}</h1>
          <h4 className="index">{newData?.index}</h4>
          <StarRating rating={newData.rating} />
          <h1 className="priceCard">{newData.price}-грн/шт</h1>
          <Description newData={newData} />
          <Deliver deliver={newData.deliver} />
          <div className="line"></div>{" "}
          <div className="buttonContainer">
            <ButtonContainer />
          </div>
        </div>
      )}
    </div>
  );
}

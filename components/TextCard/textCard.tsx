"use client";
import React, { useState } from "react";
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
          <div className="buttonContainer">
            <h1 className="priceCard">{newData.price}-грн</h1>
            <ButtonContainer />
          </div>
          <h4 className="index">{newData?.index}</h4>
          <h6 className="description">опис</h6>
          <p className="descDescription"> {newData?.description}</p>
          <Deliver deliver={newData.deliver} />
          <div className="line"></div> <Description newData={newData} />
        </div>
      )}
    </div>
  );
}

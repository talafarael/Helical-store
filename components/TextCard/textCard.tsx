import React from "react";
import "./textCard.scss";

import StarRating from "../StarRating/starRating";
import { INewData } from "@/type/newData";

import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";

export default function TextCard({ newData }: { newData: INewData | null }) {
  
  return (
    <div>
      {newData ? (
        <div className="textContainer">
          <h1 className="nameCard">{newData.name}</h1>
          <StarRating rating={newData.rating} />
          <h1 className="priceCard">{newData.price}-грн/шт</h1>
          <p className="textCard">{newData.description}</p>
          <Deliver deliver={newData.deliver} />
          <div className="line"></div>{" "}
          <div className="buttonContainer">
            <ButtonContainer />
          </div>
        </div>
      ) : null}
    </div>
  );
}

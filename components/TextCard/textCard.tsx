"use client";
import React, { useState } from "react";
import "./textCard.scss";

import StarRating from "../StarRating/starRating";
import { INewData } from "@/type/newData";

import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";
import Description from "../Description";

export default function TextCard({ newData }: { newData: INewData | null }) {
  const [menu, setMenu] = useState(true);
  return (
    <div>
      {newData && (
        <div className="textContainer">
          <div className="accardionMenu">
            <h2
              className={`${menu && "active"}  accardionText`}
              onClick={() => setMenu(true)}
            >
              Про товар
            </h2>
            <h2
              className={`${!menu && "active"} accardionText1`}
              onClick={() => setMenu(false)}
            >
              Характеристики
            </h2>
          </div>
          {menu ? (
            <>
              <h1 className="nameCard">{newData.name}</h1>
              <h4 className="index">{newData?.index}</h4>
              <StarRating rating={newData.rating} />
              <h1 className="priceCard">{newData.price}-грн/шт</h1>
              <h6 className="description">опис</h6>
              <p className="descDescription"> {newData?.description}</p>
              <Deliver deliver={newData.deliver} />
              <div className="line"></div>{" "}
            </>
          ) : (
            <Description newData={newData} />
          )}
          <div className="buttonContainer">
            <ButtonContainer />
          </div>
        </div>
      )}
    </div>
  );
}

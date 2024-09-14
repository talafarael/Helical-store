import React, { useState } from "react";
import "./textCard.scss";
// import { Rating } from 'react-simple-star-rating'
import StarRating from "../StarRating/starRating";
import { INewData } from "@/type/newData";
import CountProduct from "../CountProduct/countProduct";
import { CountContext } from "@/utils/hooks/context";
import Button from "../Button/button";
import Deliver from "../Deliver/deliver";

export default function TextCard({ newData }: { newData: INewData | null }) {
  const [count, setCount] = useState<number>(0);

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
          <CountContext.Provider value={{ count, setCount }}>
            <div className="buttonContainer">
              <CountProduct />
              <Button text="купить" func={() => {}} />{" "}
            </div>
          </CountContext.Provider>
        </div>
      ) : null}
    </div>
  );
}

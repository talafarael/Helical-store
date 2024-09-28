"use client";
import React, { useState } from "react";
import "./textCard.scss";
import Image from "next/image";
import StarRating from "../StarRating/starRating";
import { INewData } from "@/type/newData";
import arrowDown from "@/public/down-arrow-svgrepo-com.svg";
import Deliver from "../Deliver/deliver";
import ButtonContainer from "../ButtonContainer/buttonContainer";

export default function TextCard({ newData }: { newData: INewData | null }) {
  const [accordionNameItem, setAccordionNameItem] = useState(false);
  const [addCharacteristics, setAddCharacteristics] = useState(false);
  const [description, setDescription] = useState(false);
  const [characteristics, setCharacteristics] = useState(false);
  const handlerClear = () => {
    setAccordionNameItem(false);
    setAddCharacteristics(false);
    setDescription(false);
    setCharacteristics(false);
  };
  return (
    <div>
      {newData && (
        <div className="textContainer">
          <h1 className="nameCard">{newData.name}</h1>
          <h4 className="index">{newData?.index}</h4>
          <StarRating rating={newData.rating} />
          <h1 className="priceCard">{newData.price}-грн/шт</h1>
          {!accordionNameItem && (
            <h3
              className="nameItemcCharacteristics"
              onClick={() => {
                handlerClear();
                setAccordionNameItem(!accordionNameItem);
              }}
            >
              {newData?.nameItemcCharacteristics}

              <Image
                src={arrowDown}
                className="arrowDown"
                alt="down arrow"
              ></Image>
            </h3>
          )}
          {accordionNameItem && (
            <div className="desc">
              {newData?.itemcCharacteristics?.map((elem, index) => (
                <p
                  onClick={() => {
                    handlerClear();
                    setAccordionNameItem(!accordionNameItem);
                  }}
                  className="itemcCharacteristics "
                  key={index}
                >
                  {elem}
                </p>
              ))}
            </div>
          )}
          {!addCharacteristics && (
            <h3
              className="nameItemcCharacteristics"
              onClick={() => {
                handlerClear();
                setAddCharacteristics(!addCharacteristics);
              }}
            >
              Додаткові можливості
              <Image
                src={arrowDown}
                className="arrowDown"
                alt="down arrow"
              ></Image>
            </h3>
          )}
          {addCharacteristics && (
            <p
              onClick={() => {
                handlerClear();
                setAddCharacteristics(!addCharacteristics);
              }}
              className="addCharacteristics  desc"
            >
              {newData?.description}
            </p>
          )}
          <h3
            className="nameItemcCharacteristics"
            onClick={() => {
              handlerClear();
              setDescription(!description);
            }}
          >
            Характеристики
            {!description && (
              <Image
                src={arrowDown}
                className="arrowDown"
                alt="down arrow"
              ></Image>
            )}
          </h3>
          {description && <p className="textCard">{newData.description}</p>}
          <h3
            className="nameItemcCharacteristics text"
            onClick={() => {
              handlerClear();
              setCharacteristics(!characteristics);
            }}
          >
            Різновиди техніки
            {!characteristics && (
              <Image
                src={arrowDown}
                className="arrowDown"
                alt="down arrow"
              ></Image>
            )}
          </h3>
          {characteristics && (
            <div className="">
              <p className="characteristics">{newData.characteristics}</p>
              <p className="characterOptions">{newData?.characterOptions} </p>
              <p className="characterOptions">{newData?.feedback} </p>
            </div>
          )}
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

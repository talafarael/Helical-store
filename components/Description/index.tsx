import { INewData } from "@/type/newData";
import "./description.css";
import React, { useState } from "react";
import Image from "next/image";
import arrowDown from "@/public/down-arrow-svgrepo-com.svg";
export default function Description({ newData }: { newData: INewData | null }) {
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
    <div className="bodyDescritpion">
      {newData?.itemcCharacteristics && (
        <h3
          className="textDesc"
          onClick={() => {
            handlerClear();
            setAccordionNameItem(!accordionNameItem);
          }}
        >
          {newData?.nameItemcCharacteristics}

          {!accordionNameItem && (
            <Image
              src={arrowDown}
              className="arrowDown"
              alt="down arrow"
            ></Image>
          )}
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
      {newData?.addCharacteristics && (
        <h3
          className="textDesc"
          onClick={() => {
            handlerClear();
            setAddCharacteristics(!addCharacteristics);
          }}
        >
          Додаткові можливості
          {!addCharacteristics && (
            <Image
              src={arrowDown}
              className="arrowDown"
              alt="down arrow"
            ></Image>
          )}
        </h3>
      )}

      {addCharacteristics && (
        <p
          onClick={() => {
            handlerClear();
            setAddCharacteristics(!addCharacteristics);
          }}
          className="desc"
        >
          {newData?.description}
        </p>
      )}
      {newData?.description && (
        <h3
          className="textDesc"
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
      )}
      {description && (
        <p
          className="desc"
          onClick={() => {
            handlerClear();
            setDescription(!description);
          }}
        >
          {newData?.description}
        </p>
      )}

      {(newData?.characteristics ||
        newData?.characterOptions ||
        newData?.feedback) && (
        <h3
          className="textDesc"
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
      )}

      {characteristics && (
        <div
          className="desc"
          onClick={() => {
            handlerClear();
            setCharacteristics(!characteristics);
          }}
        >
          <p className="">{newData?.characteristics}</p>
          <p className="">{newData?.characterOptions} </p>
          <p className="">{newData?.feedback} </p>
        </div>
      )}
    </div>
  );
}

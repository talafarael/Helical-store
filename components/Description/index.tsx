import { INewData } from "@/type/newData";
import "./description.css";
import React from "react";
import Characteristics from "../Characteristics";
import parse from "html-react-parser";
export default function Description({ newData }: { newData: INewData | null }) {
  return (
    <div className="bodyDescritpion">
      {/* <div className="linedesc"></div> */}
      <h3 className="textDesc">Характеристики</h3>
      <div className="desc">
        <Characteristics newData={newData} />
      </div>
      <div className="linedesc"></div>{" "}
      {newData?.add && (
        <>
          <h3 className="textDesc">Додаткові можливості</h3>
          <p className="desc">{parse(newData.add)}</p>
          <div className="linedesc"></div>
        </>
      )}
    </div>
  );
}

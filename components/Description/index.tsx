import { INewData } from "@/type/newData";
import "./description.css";
import React from "react";
import Characteristics from "../Characteristics";

export default function Description({ newData }: { newData: INewData | null }) {
  return (
    <div className="bodyDescritpion">
      {/* <div className="linedesc"></div> */}
      <h3 className="textDesc">Характеристики</h3>
     
      <div className="desc">
        <Characteristics newData={newData} />
        
      </div>
      <div className="linedesc"></div>{" "}
      <h3 className="textDesc">Додаткові можливості</h3>
      <p className="desc">{newData?.addCharacteristics}</p>
      <div className="linedesc"></div>{" "}
      <h3 className="textDesc">Різновиди техніки</h3>
      <div className="desc">
        <p className="">{newData?.characteristics}</p>
        <p className="">{newData?.characterOptions} </p>
        <p className="">{newData?.feedback} </p> 
      </div>
      
      <div className="linedesc"></div>{" "}
    </div>
  );
}

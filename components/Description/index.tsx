import { INewData } from "@/type/newData";
import "./description.css";
import React from "react";

export default function Description({ newData }: { newData: INewData | null }) {

  return (
    <div className="bodyDescritpion">
      <h3 className="textDesc">{newData?.nameItemcCharacteristics}</h3>

      <div className="desc">
        {newData?.itemcCharacteristics?.map((elem, index) => (
          <p
           
            className="itemcCharacteristics "
            key={index}
          >
            {elem}
          </p>
        ))}
      </div>

      <h3 className="textDesc">Додаткові можливості</h3>

      <p className="desc">{newData?.addCharacteristics}</p>

      
      <h3 className="textDesc">Різновиди техніки</h3>
<div className="desc">
      <p className="">{newData?.characteristics}</p>
      <p className="">{newData?.characterOptions} </p>
      <p className="">{newData?.feedback} </p></div>
    </div>
  );
}

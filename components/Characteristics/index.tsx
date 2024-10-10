import { INewData } from "@/type/newData";
import React from "react";
import "./characteristics.css";
export default function Characteristics({
  newData,
}: {
  newData: INewData | null;
}) {
  return (
    <div>
      {newData?.angl && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кут розкриття</p>
          <p>{newData?.angl}°</p>
        </div>
      )}
      {newData?.gain && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Підсилення</p>
          <p>{newData?.gain}</p>
        </div>
      )}
      {newData?.num && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кількість витків</p>
          <p>{newData?.num}</p>
        </div>
      )}
      {newData?.prod && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Виробник</p>
          <p>{newData?.prod}</p>
        </div>
      )}
    </div>
  );
}

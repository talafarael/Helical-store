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
      {(newData?.frequencyRangeMax || newData?.frequencyRangeMin) && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">
            Хелікс відкритого типу на частоти
          </p>
          <p>{newData?.frequencyRangeMax}</p>{" "}
          <p>{newData?.frequencyRangeMin}</p>
        </div>
      )}

      {newData?.openingAngle && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кут розкриття</p>
          <p>{newData?.openingAngle}</p>
        </div>
      )}
      {newData?.gain && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кількість вітків</p>
          <p>{newData?.gain}</p>
        </div>
      )}
      {newData?.numberOfWinds && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кількість вітків</p>
          <p>{newData?.numberOfWinds}</p>
        </div>
      )}
      {newData?.polarization && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кількість вітків</p>
          <p>{newData?.polarization}</p>
        </div>
      )}

      {newData?.connector && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Роз&#39;єм</p>
          <p>{newData?.connector}</p>
        </div>
      )}
      {newData?.impedance && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Хвильовий опір</p>
          <p>{newData?.impedance}</p>
        </div>
      )}
      {newData?.polarization && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">КСХ в усьому діапазоні меньше</p>
          <p>{newData?.polarization}</p>
        </div>
      )}
      {newData?.vswr && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">КСХ в усьому діапазоні меньше</p>
          <p>{newData?.vswr}</p>
        </div>
      )}
      {newData?.losses && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Втрати меньше</p>
          <p>{newData?.losses}</p>
        </div>
      )}
      {newData?.cableLength && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Довжина кабеля</p>
          <p>{newData?.cableLength}</p>
        </div>
      )}
      {newData?.mounting && (
        <div className="characteristicsContainer">
          <p className="characteristicsText">Кріплення М3 \ стяжка.</p>
          <p>{newData?.mounting}</p>
        </div>
      )}
      {newData?.colorNote && (
        <div className="characteristicsContainer">
         
          <p className="characteristicsText">{newData?.colorNote}</p>
        </div>
      )}
    </div>
  );
}

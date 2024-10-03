import React from "react";
import "./button.scss";

interface IButton {
  text: string;
  func: () => void;
  type?: "submit";
}
export default function Button(data: IButton) {
  return (
    <button className="button h1Font " type={data.type} onClick={data.func}>
      {data.text}
    </button>
  );
}

import React from "react";
import "./button.scss"
interface IButton {
  text: string;
  func: () => void;
}
export default function Button(data: IButton) {
  return <button className="button">{data.text}</button>;
}

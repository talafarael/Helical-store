import React from "react";
import "./DeliverLi.scss"
export default function Deliver({ text }: { text: string }) {
  return <li className="liTextDeliver">{text}</li>;
}

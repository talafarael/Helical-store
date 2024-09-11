import React from "react";
import logo from "../../public/5400135709693698152-removebg-preview.png";
import "./header.scss";
import Image from "next/image";
export default function Header() {
  return (
    <div className="containerHead">
      <div className="whiteLine"></div>
      <div className="logo">
        <Image className="img" src={logo} alt="" />
      </div>
      <div className="containerLine "></div>
    </div>
  );
}

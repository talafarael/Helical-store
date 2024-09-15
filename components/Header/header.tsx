import React from "react";
import logo from "../../public/5400135709693698152-removebg-preview.png";
import shop from "../../public/shopping-cart.png"
import "./header.scss";
import Image from "next/image";
export default function Header() {
  return (
    <div className="containerHead">
      <div className="logo">
        <Image className="img" src={logo} alt="" />
      </div>
      <Image className="shopBin" src={shop} alt="" />
    </div>
  );
}

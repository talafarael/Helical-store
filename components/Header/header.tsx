"use client";
import React from "react";
// import logo from "../../public/giphy.webp"
import shop from "../../public/shopping-cart.png";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "../../public/menu.png";
export default function Header({
  setActiveMenu,
  activeMenu,
  boolMenu,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
  boolMenu: boolean;
}) {
  const { width } = useResize();
  const handlerStateMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <div className="containerHead">
      <div className="logo">
        {width && width < 1000 && boolMenu && (
          <Image
            onClick={handlerStateMenu}
            className="menuPicture"
            src={menuLog}
            alt=""
          />
        ) }

        {/* <Image src={logo} */}
        {/* alt="" className="gifHeader"></Image> */}
        <h1 className="HelicalTitle">Helical-store</h1>
      </div>
      <Link href="/order">
        <Image className="shopBin" src={shop} alt="" />
      </Link>
    </div>
  );
}

"use client";
import React from "react";
// import logo from "../../public/giphy.webp"
import shop from "@/public/cart.png";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "@/public/menu.png";
import imgTg from "@/public/telegram.png";
import imgSignal from "@/public/signal.png";
import SignalTower from "@/public/tv.png";
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
        {width && width < 1000 && boolMenu && 
          <Image
            onClick={handlerStateMenu}
            className="menuPicture"
            src={menuLog}
            alt=""
          />
        }

        {/* <Image src={logo} */}
        {/* alt="" className="gifHeader"></Image> */}
        <Link href="/" style={{width:"auto"}}>   <Image
          className="signalTower"
          width={55}
          height={55}
          src={SignalTower}
          alt=""
        /></Link>
          <Link href="/" style={{textDecoration:"none",width:"auto"}}>
        <h1 className="HelicalTitle">Helical-store</h1></Link>
      </div>
      <div className="logoContainer">
      <Link href="https://signal.org/ru/" style={{zIndex:1}} target="_blank "rel="noopener noreferrer">
      <Image
      
        src={imgSignal}
        className="imgTg"
        width={40}
        height={40}
        alt="Telegram"
      />
    </Link>
        <Link href="https://t.me/univwork">
          <Image src={imgTg} className="imgTg" width={40} height={40} alt="" />
        </Link>
        <Link href="/order" className="linkToOrder">
          <Image className="shopBin" src={shop} alt="" />
        </Link>
      </div>
    </div>
  );
}

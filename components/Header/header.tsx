"use client";
import React from "react";
// import logo from "../../public/giphy.webp"
import shop from "@/public/shop-svgrepo-comWhite2.svg";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "@/public/menu-svgrepo-com.svg";
import phone from "@/public/phone-svgrepo-comWhite.svg"
import SignalTower from "@/public/signal-svgrepo-comWhite.svg";
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
        {width && width < 1100 && boolMenu && 
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
          width={65}
          height={65}
          src={SignalTower}
          alt=""
        /></Link>
          <Link href="/" style={{textDecoration:"none",width:"auto"}}>
        <h1 className="HelicalTitle">Helical.Store</h1></Link>
      </div>
      
        <div className="phoneNumber">
        {width && width >1100 && <div className="contantHeader">
        <Image src={phone} alt='phone' 
        width={20}
        height={20}/>
     <h3>+380984884824</h3></div>
    }
        <Link href="/order" className="linkToOrder">
          <Image className="shopBin" src={shop} alt="" />
        </Link>
      </div>
    </div>
  );
}

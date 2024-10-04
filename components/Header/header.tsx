"use client";
import React from "react";
// import logo from "../../public/giphy.webp"
import shop from "@/public/shop-svgrepo-comWhite2.svg";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "@/public/menu-svgrepo-comWhite.svg";
import phone from "@/public/phone-svgrepo-comWhite.svg";
import SignalTower from "@/public/signal-svgrepo-comWhite.svg";
export default function Header({
  setActiveMenu,
  activeMenu,
  boolMenu,
  setActiveMenuPhone,
  activeMenuPhone,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
  boolMenu: boolean;
  setActiveMenuPhone: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenuPhone: boolean;
}) {
  const { width } = useResize();
  const handlerStateMenu = () => {
    setActiveMenu(!activeMenu);
    setActiveMenuPhone(false);
  };
  const handlerStateMenuPhone = () => {
    width && width < 800 && setActiveMenuPhone(!activeMenuPhone);
    setActiveMenu(false);
  };

  return (
    <div className="containerHead">
      <div className="logo">
        {width && width < 1100 && boolMenu && (
          <Image
            onClick={handlerStateMenu}
            className="menuPicture"
            src={menuLog}
            alt=""
          />
        )}

        {/* <Image src={logo} */}
        {/* alt="" className="gifHeader"></Image> */}
        <Link href="/"  className="linkTower" style={{ width: "auto" }}>
          {" "}
          <Image
           className="signalTower"
            width={65}
            height={65}
            src={SignalTower}
            alt=""
          />
        </Link>
        <Link href="/" style={{ textDecoration: "none", width: "auto" }}>
          <h1 className="HelicalTitle">Helical.Store</h1>
        </Link>
      </div>

      <div className="contantHeader">
        <div className="phoneNumber">
          <Image
            src={phone}
            alt="phone"
            onClick={() => {
              handlerStateMenuPhone();
            }}
            className="phoneImg"
            width={30}
            height={30}
          />
          {width && width > 800 && <h3>+380984884824</h3>}
        </div>

        <Link href="/order" className="linkToOrder">
          <Image className="shopBin" src={shop} alt="" />
        </Link>
      </div>
    </div>
  );
}

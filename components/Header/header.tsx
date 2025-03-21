"use client";
import React from "react";
// import logo from "../../public/giphy.webp"
import shop from "@/public/shop-svgrepo-comWhite2.svg";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "@/public/menu-svgrepo-comWhite.svg";

import SignalTower from "@/public/wireless-connection-svgrepo-com.svg";
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

  // useEffect(() => {
  //   const localOrder: string | null = localStorage.getItem("order");
  //   const order = localOrder ? JSON.parse(localOrder) : [];
  // }, []);
  
  return (
    <header className="containerHead">
      <section className="logo">
        {width && width < 1100 && !boolMenu ? (
          <Image
            onClick={handlerStateMenu}
            className="menuPicture"
            src={menuLog}
            alt=""
          />
        ) : null}
        <Link href="/" className="linkTower" style={{ width: "auto" }}>
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
      </section>

      <div className="contantHeader">
        <Link href="/order" className="linkToOrder">
          {/* {order.length ? <div className="shopCount">1</div> : null} */}
          <Image className="shopBin" src={shop} alt="" />
        </Link>
      </div>
    </header>
  );
}

import React from "react";
import logo from "../../public/5400135709693698152-removebg-preview.png";
import shop from "../../public/shopping-cart.png";
import "./header.scss";
import Image from "next/image";
import Link from "next/link";
import { useResize } from "@/utils/screenSize";
import menuLog from "../../public/menu.png";
export default function Header({
  setActiveMenu,
  activeMenu,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
}) {
  const { width } = useResize();
  const handlerStateMenu = () => {
   
    setActiveMenu(!activeMenu);
  };
  return (
    <div className="containerHead">
      <div className="logo">
        {width && width < 1000 ? (
          <Image
            onClick={handlerStateMenu}
            className="menuPicture"
            src={menuLog}
            alt=""
          />
        ) : null}
        <Image className="img" src={logo} alt="" />
      </div>
      <Link href="/order">
        <Image className="shopBin" src={shop} alt="" />
      </Link>
    </div>
  );
}

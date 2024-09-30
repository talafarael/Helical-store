import React from "react";
import "./footer.css";
import imgTg from "@/public/telegram-svgrepo-com.svg";
import imgSignal from "@/public/signal-chat-message-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footerContainer">
      ;
      <Link
        href="https://signal.org/ru/"
        style={{ zIndex: 1 }}
        target="_blank "
        rel="noopener noreferrer"
      >
        <Image
          src={imgSignal}
          className="imgTg"
          width={55}
          height={55}
          alt="Telegram"
        />
      </Link>
      <Link href="https://t.me/univwork">
        <Image src={imgTg} className="imgTg" width={40} height={40} alt="" />
      </Link>
    </footer>
  );
}

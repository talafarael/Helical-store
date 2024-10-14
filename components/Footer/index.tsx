import React from "react";
import "./footer.css";
import imgTg from "@/public/telegram-svgrepo-com.svg";
import imgSignal from "@/public/signal-chat-message-svgrepo-com.svg";
import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="footerContainer">
      <Link
        href="https://signal.group/#CjQKIPKqOLcX-HyfSVq1VmNRbKWkD5sufi83GQj8YOBDwlLqEhBgBooK9fXpZ2LK3F9Qon8_"
        style={{ marginRight: "50px", zIndex: 1 }}
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
      <Link
        style={{ marginLeft: "50px" }}
        href="https://t.me/+ArllqTEtkH5kYjdi"
        target="_blank "
         rel="noopener noreferrer"
      >
        <Image src={imgTg} className="imgTg" width={40} height={40} alt="" />
      </Link>
    </footer>
  );
}

// "use client";
import localFont from "next/font/local";
import "../app/globals.scss";
import "./layout.scss";
import Header from "./Header/header";

import Menu from "./Menu/menu";
import { Suspense, useEffect, useState } from "react";
import Load from "./Load";
import Footer from "./Footer";

import GoogleAnalytics from "./GoogleAnalytics";
import { useRouter } from "next/router";

import { ICategory } from "@/type/ICategory";
import { getCategories } from "@/api/getApiCategory";

// const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
const geistSans = localFont({
  src: "../app/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const vesperLibre = localFont({
  src: "../app/fonts/VesperLibre-Bold.ttf",
  variable: "--font-vesper-libre",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../app/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const Rubik = localFont({
  src: "../app/fonts/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  weight: "100 900",
});
const geistSemiBold = localFont({
  src: "../app/fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf",
  variable: "--font-semi-bold",
  weight: "100 900",
});
const geistOverpass = localFont({
  src: "../app/fonts/Overpass-VariableFont_wght.ttf",
  variable: "--font-overpass",
  weight: "100 900",
});
const RoboBold = localFont({
  src: "../app/fonts/Roboto-Black.ttf",
  variable: "--robo-bold",
  weight: "100 900",
});
const geistMontserrat = localFont({
  src: "../app/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  weight: "100 900",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const pathsWithoutMenu = [/^\/product\/[a-zA-Z0-9_-]+$/, "/order"];

  const boolMenu = pathsWithoutMenu.some((path) =>
    typeof path === "string" ? path === router.asPath : path.test(router.asPath)
  );
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await getCategories());
    };
    fetchCategories();
  }, []);
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
        page_title: document.title,
        page_location: window.location.href,
        page_path: url,
      });

      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID as string, {
        page_path: url,
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  return (
    <div
      className={` conatiner ${geistOverpass.variable} ${RoboBold.variable} ${Rubik.variable} ${geistMontserrat.variable} ${geistSemiBold.variable} ${geistMono.variable} ${geistSans.variable} ${vesperLibre.variable}`}
    >
      <Header
        boolMenu={boolMenu}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      {/* <GoogleRouter /> */}
      <div className="body">
        <GoogleAnalytics />
        {!boolMenu && (
          <Menu
            data={categories}
            setActiveMenu={setActiveMenu}
            activeMenu={activeMenu}
          />
        )}{" "}
     
          <Suspense fallback={<Load />}>{children}</Suspense>{" "}
    
      </div>
      <Footer />
    </div>
  );
}

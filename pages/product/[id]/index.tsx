"use client";
import { useRouter } from "next/router";

import { useState, useEffect, Suspense } from "react";

import "./product.scss";
import TextCard from "@/components/TextCard/textCard";
import { INewData } from "@/type/newData";
import CardImg from "@/components/CardImg/cardImg";
import fetchData from "@/api/getApiProduct";
import leftArrow from "@/public/left-arrow.png";
import Image from "next/image";
import Link from "next/link";
import Load from "@/components/Load";
import Loading from "../../loading";
import Head from "next/head";

export default function Main() {
  const [newData, setNewData] = useState<INewData | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const [isMounted, setIsMounted] = useState<boolean>(true);
  useEffect(() => {
    setIsMounted(true);

    fetchData(id, isMounted, setNewData);

    return () => {
      setIsMounted(false);
    };
  }, [id]);

  return (
    <div className="containerProduct">
      <Head>
        <title>{newData?.name}</title>
        <meta name="description" content={newData?.description} />
      </Head>
      <Link href={"/"} className="buttonBack">
        <Image src={leftArrow} alt={`load`} width={40} height={40}></Image>
      </Link>
      <div className="conainerForProduct">
        <div className="imgContainer">
          <Suspense fallback={<Loading />}>
            {newData ? (
              <CardImg img={newData.img ? newData.img : ["noImage.png"]} />
            ) : (
              <Load />
            )}
          </Suspense>
        </div>
        <div className="informationContainer">
          <TextCard newData={newData} />
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, Suspense } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import "./product.scss";
import TextCard from "@/components/TextCard/textCard";
import { INewData } from "@/type/newData";

import fetchData from "@/api/getApiProduct";
import leftArrow from "@/public/left-arrow.png";
import Image from "next/image";

import Load from "@/components/Load";
import Loading from "../../loading";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import CardImg from "@/components/CardImg";
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { id: params?.id },
  };
};

export async function getStaticPaths() {
  const db = getFirestore();
  const collectionRef = collection(db, "id");
  const snapshot = await getDocs(collectionRef);

  const documentIds = snapshot.docs.map((doc) => doc.id);

  return {
    paths: documentIds.map((elem) => ({
      params: { id: elem },
    })),
    fallback: false,
  };
}
export default function Main({ id }: { id: string }) {
  const [newData, setNewData] = useState<INewData | null>(null);

  const [isMounted, setIsMounted] = useState<boolean>(true);
  useEffect(() => {
    setIsMounted(true);

    fetchData(id, isMounted, setNewData);

    return () => {
      setIsMounted(false);
    };
  }, [id]);
  const router = useRouter();
  return (
    <div className="containerProduct">
      <Head>
        <title>{newData?.name}</title>
        <meta name="description" content={newData?.desc} />
      </Head>
      <button onClick={() => router.back()} title="click return to before page" className="buttonBack">
        <Image src={leftArrow} alt={`load`} width={40} height={40}></Image>
      </button>
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

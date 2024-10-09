"use client";
import React, { Suspense, useEffect, useState } from "react";
import "./category.scss";
// import { INewData } from "@/type/newData";
import { useRouter } from "next/router";
import fetchCategoryData from "@/api/getApiProductCategory";
import Card from "@/components/Card/card";
import Load from "@/components/Load";
import Head from "next/head";
import { INewData } from "@/type/newData";

export default function Category() {
  const [newData, setNewData] = useState<INewData[] | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(true);

  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    setIsMounted(true);

    fetchCategoryData(id, isMounted, setNewData);

    return () => {
      setIsMounted(false);
    };
  }, [id]);

  return (
    <div className="categoryContainerCardMain">
      <Head>
        <title>{id}</title>
        <meta
          name="description"
          content={
            newData
              ? `${id} Discover our collection of ${newData[0].name}. ${newData[0].desc}`
              : "Explore our products."
          }
        />
      </Head>
      <div className="titlePageCategory">
        <h1 className="textBack">{id}</h1>
      </div>
      <Suspense fallback={<Load />}>
        <div className="categoryContainerCard">
          {newData?.map((elem) => (
            <Card key={elem.id} data={elem} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

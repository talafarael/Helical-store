"use client";
import React, { Suspense, useEffect, useState } from "react";
import "./category.scss";
// import { INewData } from "@/type/newData";

import fetchCategoryData from "@/api/getApiProductCategory";
import Card from "@/components/Card/card";
import Load from "@/components/Load";
import Head from "next/head";
import { INewData } from "@/type/newData";
import { GetStaticProps } from "next";
import { getCategories } from "@/api/getApiCategory";
import IsError from "@/components/IsError";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const arr = await getCategories();
  const category = arr.filter((elem) => elem.id == params?.id);
  return {
    props: { id: params?.id, category: category[0].cat },
  };
};

export async function getStaticPaths() {
  const arr = await getCategories();

  return {
    paths: arr.map((elem) => ({
      params: { id: elem.id },
    })),
    fallback: false,
  };
}
export default function Category({
  id,
  category,
}: {
  id: string;
  category: string;
}) {
  const [newData, setNewData] = useState<INewData[] | null>(null);
  const [isMounted, setIsMounted] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);

    fetchCategoryData(id, isMounted, setNewData, setError);

    return () => {
      setIsMounted(false);
    };
  }, [id]);

  return (
    <div className="categoryContainerCardMain">
      {!error ? (
        <>
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
        
            <h1 className="titlePage">{category}</h1>
         
          <Suspense fallback={<Load />}>
            <div className="categoryContainerCard">
              {newData?.map((elem) => (
                <Card key={elem.id} data={elem} />
              ))}
            </div>
          </Suspense>
        </>
      ) : (
        <IsError />
      )}
    </div>
  );
}

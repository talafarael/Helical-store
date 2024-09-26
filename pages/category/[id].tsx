import React, { Suspense, useEffect, useState } from "react";
import "./category.scss";
// import { INewData } from "@/type/newData";
import { useRouter } from "next/router";
import fetchCategoryData from "@/api/getApiProductCategory";
import Card from "@/components/Card/card";
import Load from "@/components/Load";

export default function Category() {
  interface INewData {
    id: string;
    imgMain: string;
    name: string;
    description: string;
    price: string;
    img: string[];
  }
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
      <div className="titlePageCategory">
    
       
        <h1 className="textBack">{id}</h1>
       
      </div>
      <Suspense fallback={<Load /> }>
      <div className="categoryContainerCard">
        {newData?.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
      </div>
      </Suspense>
    </div>
  );
}

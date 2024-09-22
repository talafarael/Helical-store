import React, { useEffect, useState } from "react";
import "./category.scss";
// import { INewData } from "@/type/newData";
import { useRouter } from "next/router";
import fetchCategoryData from "@/api/getApiProductCategory";
import Card from "@/components/Card/card";
import leftArrow from "@/public/left-arrow.png";
import Image from "next/image";
import Link from "next/link";
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
      <Link href={"/"} className="titlePageCategory">
       <Image
          src={leftArrow}
          className="backArrow"
          alt={`load`}
          width={25}
          height={25}
        ></Image>
        <h1 className="textBack">{id}</h1>
      </Link>
      <div className="categoryContainerCard">
        {newData?.map((elem) => (
          <Card key={elem.id} data={elem} />
        ))}
      </div>
    </div>
  );
}

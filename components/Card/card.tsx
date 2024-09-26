import React, { Suspense } from "react";
// import img from "../../public/fpv-drones-war-2-830x498-900x540.jpg";
import "./card.scss";
import Image from "next/image";
import Link from "next/link";
import stub from "@/public/stud.jpg";
import { INewData } from "@/type/newData";
import { Rating } from "react-simple-star-rating";
import Load from "../Load";

export default function Card({ data }: { data: INewData }) {
  return (
 
    <Link className="cardContainer" href={`/product/${data.id}`}>
      <div className="containerImg">
      <Suspense fallback={<Load />}>
        <Image
          src={data.imgMain ? `/${data.imgMain}` : stub}
          className="cardImg"
          alt=""
          width="262"
          height="280"
          // fill
        /></Suspense>
      </div>
      <div className="containerText">
        <h1 className="title">{data.name}</h1>
        <div className="cardStart">
          <Rating size={15} initialValue={data.rating} readonly={true} />
        </div>
        <p className="price">{data.price}-грн/шт</p>
      </div>
    </Link>
  );
}

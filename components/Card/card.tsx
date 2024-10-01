import React, { Suspense } from "react";
// import img from "../../public/fpv-drones-war-2-830x498-900x540.jpg";
import "./card.scss";
import Image from "next/image";
import Link from "next/link";
import stub from "@/public/noImage.png";
import { INewData } from "@/type/newData";
import hryvnia from "@/public/ukraine-hryvnia-icon.svg"
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
            priority={true}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "@/public/noImage.png";
            }}
          />
        </Suspense>
      </div>
      <div className="containerText">
        <h1 className="title h1Font">{data.name}</h1>
 <div   className="pDescriptionConatiner">
  <div className="pDescriptionWeight">кут  </div>
    <div className="pDescription"> {data?.openingAngle}</div></div> 
<div className="pDescriptionConatiner">
    <p className="pDescriptionWeight">посилення  </p>
     <p className="pDescription" > {data?.gain} </p></div>
        <p className="price ">{data.price}
          <Image src={hryvnia}alt="грн" height={10}
          width={10}></Image>
          </p>
      </div>
    </Link>
  );
}

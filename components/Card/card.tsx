import React, { Suspense } from "react";
// import img from "../../public/fpv-drones-war-2-830x498-900x540.jpg";
import "./card.scss";
import Image from "next/image";
import Link from "next/link";
import stub from "@/public/noImage.png";
import { INewData } from "@/type/newData";

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
        <p className="pDescription">кут{data?.openingAngle}</p>
        <p className="pDescription">посилення-{data?.gain} </p>
        <p className="price ">{data.price}-грн/шт</p>
      </div>
    </Link>
  );
}

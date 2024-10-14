import React, { Suspense } from "react";
// import img from "../../public/fpv-drones-war-2-830x498-900x540.jpg";
import "./card.scss";
import Image from "next/image";
import Link from "next/link";
import stub from "@/public/img/noImage.png";
import { INewData } from "@/type/newData";
import hryvnia from "@/public/hrivnaRed.svg";
import Load from "../Load";

export default function Card({ data }: { data: INewData }) {
  return (
    <Link className="cardContainer" href={`/product/${data.id}`}>
      <div className="containerImg">
        <Suspense fallback={<Load />}>
          <Image
            src={data.img && data.img.length > 0 ? `/img/${data.img[0]}` : stub}
            className="cardImg"
            alt=""
            width="262"
            height="280"
            priority={true}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/img/noImage.png";
            }}
          />
        </Suspense>
      </div>
      <div className="containerText">
        <h1 className="title h1Font">{data.name}</h1>
        <div className="pDescriptionConatiner">
          <p className="pDescriptionWeight">підсилення: </p>
          <p className="pDescription"> {data?.gain} </p>
        </div>
        <div className="pDescriptionConatiner">
          <div className="pDescriptionWeight">кут: </div>
          <div className="pDescription"> {data?.angl}°</div>
        </div>
        
        {data.price ? (
          <p className="price ">
            {data.price}
            <Image src={hryvnia} alt="грн" height={10} width={10}></Image>
          </p>
        ) : null}
      </div>
    </Link>
  );
}

import React from "react";
// import img from "../../public/fpv-drones-war-2-830x498-900x540.jpg";
import "./card.scss";
import Image from "next/image";
import Link from "next/link";

interface IData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img:string[];
}
export default function Card({ data }: { data: IData }) {
  return (
    <Link className="cardContainer" href={`/product/${data.id}`}>
      <div className="containerImg">
        <Image
          src={`/${data.imgMain}`}
          className="cardImg"
          alt=""
          width="262" height="280" 
          // fill
        />
      </div>
      <div className="containerText">
        <h1 className="title">{data.name}</h1>

        <p className="price">{data.price}-грн/шт</p>
      </div>
    </Link>
  );
}

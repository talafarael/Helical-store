import React from "react";
import { Rating } from "react-simple-star-rating";
import "./starRating.scss";
export default function StarRating({ rating }: { rating: number }) {
  return (
    <div className="containerClass">
      <Rating size={35} initialValue={rating} readonly={true} />
    </div>
  );
}

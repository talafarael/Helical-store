import React from "react";
import { Rating } from "react-simple-star-rating";
import "./starRating.scss";
export default function StarRating({ rating }: { rating: number | undefined }) {
  return (
    <>
      {rating ? (
        <Rating size={35} initialValue={rating} readonly={true} />
      ) : null}
    </>
  );
}

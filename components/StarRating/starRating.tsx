import React from 'react'
import { Rating } from 'react-simple-star-rating'
import './starRating.scss'
export default function StarRating({rating}:{rating:number}) {
  return (
    <Rating
    initialValue={rating}
    readonly={true}
    
  />
  )
}

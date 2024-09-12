import React from 'react';
import "./textCard.scss";
// import { Rating } from 'react-simple-star-rating'
import StarRating  from "../StarRating/starRating"
import { INewData } from '@/type/newData';
export default function TextCard({newData}:{newData:INewData|null}) {
  // const [rating, setRating] = useState(5)

 

  return (
    <div>
{newData?(<div className='textContainer'>

    <h1 className='nameCard'>{newData.name}</h1>
   <StarRating rating={newData.rating}  />
   <div className='line'></div>
    <p className='textCard'>{newData.description}</p>
    <h1 className='priceCard'>{newData.price}</h1>


</div>):null}
    </div>
  )
}

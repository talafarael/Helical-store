import React from 'react';
import "./textCard.scss";
interface INewData {
    id: string;
    imgMain: string;
    name: string;
    description: string;
    price: string;
    img: string[];
  }
export default function TextCard({newData}:{newData:INewData|null}) {
  return (
    <div>
{newData?(<div className='textContainer'>

    <h1 className='nameCard'>{newData.name}</h1>
    <p className='textCard'>{newData.description}</p>
    <h1 className='priceCard'>{newData.price}</h1>


</div>):null}
    </div>
  )
}

export interface INewData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
  deliver?: IDeliver[];
  rating?: number;
}
export interface IDeliver {
  deliver?: string;
  deliverImg?: string;
}
export interface IDefaultData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
  deliver?: string;
  rating?: number;
  count:number
}
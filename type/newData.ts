export interface INewData {
  id: string;
  img: string[];
  name: string;
  num: string;
  gain: string;
  angl: string;
  desc: string;
  price: string;
  prod: string;
  add: string;
  ategory: string;
}
export interface IDeliver {
  deliver?: string;
  deliverImg?: string;
}
export interface IDefaultData {
  id: string;
  img: string[];
  name: string;
  num: string;
  gain: string;
  angl: string;
  desc: string;
  price: string;
  prod: string;
  add?: string;
  count: number;
  category: string;
}

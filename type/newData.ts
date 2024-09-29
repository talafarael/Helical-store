export interface INewData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
  deliver?: IDeliver[];
  rating?: number;
  nameItemcCharacteristics?: string;
  addCharacteristics?: string;
  characteristics?: string;
  feedback?: string;
  index?: string;
  itemcCharacteristics?: string[];
  characterOptions?: string;
  frequencyRangeMax?:string;
  frequencyRangeMin?:string;
  openingAngle?:string;
  gain?:string;
  numberOfWinds?:string;
  connector?:string;
  impedance?:string;
  polarization?:string;
  vswr?:string;
  losses?:string;
  cableLength?:string;
  mounting?:string;
  colorNote?:string;
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
  nameItemcCharacteristics?: string;
  addCharacteristics?: string;
  characteristics?: string;
  feedback?: string;
  index?: string;
  itemcCharacteristics?: string[];
  price: string;
  img: string[];
  deliver?: string;
  rating?: number;
  count: number;
  characterOptions?: string;
}

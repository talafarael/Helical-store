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


import "./index.scss";
import Card from "@/components/Card/card";
import { db } from "../utils/firebase";
interface INewData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
}
export default function main({ newData }: { newData: INewData[] }) {
  return (
    <div className="containerMain">
      <h1 className="titlePage">Home</h1>
      <div className="containerCard">
        {newData.map((element) => (
          <Card key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
}

import { collection, getDocs } from "firebase/firestore";

export const getStaticProps = async () => {
  const newData = await getDocs(collection(db, "id")).then((querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  });

  return {
    props: { newData },
  };
};

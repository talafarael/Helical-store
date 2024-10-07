
import "./index.scss";
import Card from "@/components/Card/card";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { INewData } from "@/type/newData";

export default function Page({ data }: { data: INewData[] }) {
  return (
    <div className="containerMain">
     
      <h1 className="titlePage">Усі товари</h1>
      <div className="containerCard">
        {data.map((element) => (
          <Card key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const querySnapshot = await getDocs(collection(db, "id"));
  const data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as INewData[];

  return {
    props: { data },
    
  };
};

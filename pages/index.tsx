import "./index.scss";
import Card from "@/components/Card/card";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { INewData } from "@/type/newData";
// import { getChatId } from "@/utils/telegram";

export default function Page({ data }: { data: INewData[] }) {
  // getChatId()
  return (
    <div className="containerMain">
      <h1 className="titlePage">Рекомендовані</h1>

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
  let data = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  })) as INewData[];
  data.map((elem) => {
    if (!elem.rate) {
      elem.rate = 0;
    }
  });
  data = data.sort((a, b) => Number(b.rate) - Number(a.rate));
  data=data.filter(elem=>Number(elem.hide)==1)
  return {
    props: { data },
  };
};

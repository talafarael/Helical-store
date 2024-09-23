"use client";
import "./index.scss";
import Card from "@/components/Card/card";
import { db } from "../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

interface INewData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
}
 const Main = () => {
  const [newData, setNewData] = useState<INewData[] | undefined>();

  useEffect(() => {
    async function fetchNewData() {
      const querySnapshot = await getDocs(collection(db, "id"));
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })) as INewData[];
      setNewData(data);
    }

    fetchNewData();
  }, []);
  return (
    <div className="containerMain">
      <h1 className="titlePage">Home</h1>
      <div className="containerCard">
        {newData?.map((element) => (
          <Card key={element.id} data={element} />
        ))}
      </div>
    </div>
  );
};
export default Main
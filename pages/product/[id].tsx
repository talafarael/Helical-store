import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";
import CardImg from "@/components/cardImg/cardImg";
import "./product.scss";
import TextCard from "@/components/TextCard/textCard";
interface INewData {
  id: string;
  imgMain: string;
  name: string;
  description: string;
  price: string;
  img: string[];
}
export default function Main() {
  const [newData, setNewData] = useState<INewData | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (typeof id === "string") {
      const fetchData = async () => {
        const docRef = doc(db, "id", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setNewData({
            id: docSnap.id,
            imgMain: data.imgMain,
            name: data.name,
            description: data.description,
            price: data.price,
            img: data.img,
          });
        } else {
          console.log("Документ не найден!");
        }
      };

      fetchData();
    }
  }, [id]);
  console.log(newData);
  return (
    <div className="containerProduct">
      <div className="imgContainer">
        {newData ? <CardImg img={newData.img} /> : null}
      </div>
      <div className="informationContainer">
        <TextCard newData={newData} />
      </div>
    </div>
  );
}

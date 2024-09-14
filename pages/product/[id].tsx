import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";

import "./product.scss";
import TextCard from "@/components/TextCard/textCard";
import { IDeliver, INewData } from "@/type/newData";
import CardImg from "@/components/cardImg/cardImg";

export default function Main() {
  const [newData, setNewData] = useState<INewData | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const [isMounted, setIsMounted] = useState<boolean>(true);
  useEffect(() => {
    setIsMounted(true);

    if (typeof id === "string") {
      const fetchData = async () => {
        try {
          const docRef = doc(db, "id", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists() && isMounted) {
            const data = docSnap.data();
            const deliverPromises = data.deliver.map(async (elem: string) => {
              const deliverDocRef = doc(db, "deliver", elem);
              const deliverSnap = await getDoc(deliverDocRef);
              const deliverData = deliverSnap.data();
              return deliverData
                ? {
                    deliver: deliverData.deliver,
                    deliverImg: deliverData.deliverImg,
                  }
                : null;
            });

            const deliverResults = await Promise.all(deliverPromises);
            const deliver = deliverResults.filter(
              (item) => item !== null
            ) as IDeliver[];

            if (isMounted) {
              setNewData({
                id: docSnap.id,
                imgMain: data.imgMain,
                name: data.name,
                description: data.description,
                price: data.price,
                img: data.img,
                rating: data.rating,
                deliver: deliver,
              });
            }
          } else {
            console.log("Документ не найден!");
          }
        } catch (error) {
          console.error("Ошибка при получении данных:", error);
        }
      };

      fetchData();
    }

    return () => {
      setIsMounted(false);
    };
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

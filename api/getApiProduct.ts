import { db } from "@/utils/firebase";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { INewData } from "@/type/newData";
const fetchData = async (
  id: string | undefined | string[],
  isMounted: boolean,
  setNewData: React.Dispatch<React.SetStateAction<INewData | null>>
) => {
  try {
    if (typeof id === "string") {
      const docRef = doc(db, "id", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && isMounted) {
        const data = docSnap.data();
        let deliver = [];
        if (data.deliver) {
          const deliverPromises = data.deliver?.map(async (elem: string) => {
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

          deliver = deliverResults?.filter((item) => item !== null);
        }

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
            nameItemcCharacteristics: data?.nameItemcCharacteristics,
            addCharacteristics: data?.addCharacteristics,
            characteristics: data?.characteristics,
            feedback: data?.feedback,
            index: data?.index,
            itemcCharacteristics: data?.itemcCharacteristics,
            characterOptions:data?.characterOptions,
          });
        }
      } else {
        console.log("Документ не найден!");
      }
    }
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
};
export default fetchData;

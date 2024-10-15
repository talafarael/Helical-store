import { db } from "@/utils/firebase";
import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { INewData } from "@/type/newData";
const fetchData = async (
  id: string | undefined | string[],
  isMounted: boolean,
  setNewData: React.Dispatch<React.SetStateAction<INewData | null>>,
  setError:React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    if (typeof id === "string") {
      const docRef = doc(db, "id", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && isMounted) {
        const data = docSnap.data();

        if (isMounted) {
          setNewData({
            id: docSnap.id,
           cat:data.cat,
            name: data.name,
            desc: data.desc,
            price: data.price,
            img: data.img,
            num: data.num,
            add: data.add,
            prod: data.prod,
            angl: data.angl,
            gain: data.gain,
            rate:data?.rate ?data.rate : 0,
            hide:data?.hide ? data.hide : 0
          });
        }
      } else {
        console.log("Документ не найден!");
      }
    }
  } catch (error) {
    setError(true)
  }
};
export default fetchData;

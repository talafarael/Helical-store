import { db } from "@/utils/firebase";
import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { INewData } from "@/type/newData";

const fetchCategoryData = async (
  category: string | undefined | string[],
  isMounted: boolean,
  setNewData: React.Dispatch<React.SetStateAction<INewData[] | null>>,
  setError?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    if (typeof category === "string") {
      // Create query to get documents by category
      const q = query(collection(db, "id"), where("cat", "==", category));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Map over the documents and create an array of data
        const dataPromises = querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            name: data.name,
            desc: data.desc,
            price: data.price,
            img: data.img,
            num: data.num,
            add: data.add,
            prod: data.prod,
            angl: data.angl,
            cat: data.cat,
            gain: data.gain,
          } as INewData;
        });
        const dataResults = await Promise.all(dataPromises);

        // Update state with the fetched data
        if (isMounted) {
          setNewData(dataResults);
        }
      } else {
        console.log("No documents found!");
        if (isMounted) {
          setNewData(null);
        }
      }
    }
  } catch (error) {
    if (setError) setError(true);
    console.error("Error fetching data:", error);
  }
};

export default fetchCategoryData;

import { db } from "@/utils/firebase";
import React from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { INewData } from "@/type/newData";

const fetchCategoryData = async (
  category: string | undefined | string[],
  isMounted: boolean,
  setNewData: React.Dispatch<React.SetStateAction<INewData[] | null>>
) => {
  try {
    if (typeof category === "string") {
      // Create query to get documents by category
      const q = query(collection(db, "id"), where("category", "==", category));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Map over the documents and create an array of data
        const dataPromises = querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            imgMain: data.imgMain,
            name: data.name,
            description: data.description,
            price: data.price,
            img: data.img,
            rating: data.rating,
            characterOptions:data?.characterOptions,
            nameItemcCharacteristics: data?.nameItemcCharacteristics,
            addCharacteristics: data?.addCharacteristics,
            characteristics: data?.characteristics,
            feedback: data?.feedback,
            index: data?.index,
            itemcCharacteristics: data?.itemcCharacteristics,
            
          };
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
    console.error("Error fetching data:", error);
  }
};

export default fetchCategoryData;

import { IDefaultData } from "@/type/newData";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getOrder = async () => {
  try {
    const localOrder: string | null = localStorage.getItem("order");
    const order = localOrder ? JSON.parse(localOrder) : [];
    if (!order.length) return [];

    

    const results = await Promise.all(
      order.map(async (element: { id: string; count: number }) => {
        const docRef = doc(db, "id", element.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const arr = {
            ...docSnap.data(),
            count: element.count,
            id: element.id,
          } as IDefaultData;
         
          return arr;
        } else {
          console.error(`Document with ID ${element.id} not found.`);
          return null;
        }
      })
    );

    return results.filter((result) => result !== null); // Filter out any null results
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  }
};

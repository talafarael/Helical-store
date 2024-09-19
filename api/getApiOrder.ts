import { IDefaultData } from "@/type/newData";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

export const getOrder=async()=>{ try {
    const localOrder:string|null=localStorage.getItem("order")
    const order = localOrder ? JSON.parse(localOrder) : [];
    if (!order)
       return [];
    console.log(order)  
    const results = await Promise.all(
      order.map(async (element: { id: string,count:number }) => {
        const docRef = doc(db, "id", element.id);
        const docSnap = await getDoc(docRef);
       const arr={ ...docSnap.data(),c} as IDefaultData;
       console.log(arr)
      })
    );
   return results;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    return [];
  } 
}
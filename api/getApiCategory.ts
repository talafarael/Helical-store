import { ICategory } from "@/type/ICategory";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
export async function getCategories() {
  const querySnapshot = await getDocs(collection(db, "category"));
  return querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    
  })) as ICategory[];
}

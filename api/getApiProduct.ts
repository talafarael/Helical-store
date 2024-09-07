import { db } from "../utils/firebase";


import { collection, getDocs } from "firebase/firestore";
export const fetchGet = async () => {
  const newData = await getDocs(collection(db, "id")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return newData;
  });
  return {
    props: { newData },
  };
};
export default fetchGet;

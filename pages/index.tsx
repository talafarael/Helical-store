// import fetchGet from "@/src/api/getApiProduct";
import { db } from "../src/utils/firebase";
export default function main({ newData }) {
  console.log(newData);
  return <div>main</div>;
}

import { collection, getDocs } from "firebase/firestore";
export const getStaticProps  = async () => {
 const newData=await getDocs(collection(db, "id")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    console.log(newData)
    return newData
  });
  return {
      props: { newData },
    };
};

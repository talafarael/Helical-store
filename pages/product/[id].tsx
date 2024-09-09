import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../utils/firebase";

export default function Main() {
  const [newData, setNewData] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        const docRef = doc(db, "id", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNewData({ ...docSnap.data(), id: docSnap.id });
          console.log({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("Документ не найден!");
        }
      }; 

      fetchData();
    }
  }, [id]); // Выполняется при изменении id
  console.log(newData);
  return <div>{id}</div>;
}

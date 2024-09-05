import React, { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./utils/firebase";
import "./App.css";
function App() {
  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "id"), {
        user: "afaa",
        тфьу: "f",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "id")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id:doc.id 
      }));
       console.log(newData)
    });
  };
  useEffect(() => {
    fetchPost();
  }, []);
  // useEffect(() => {
  //   addTodo();
  // }, []);
  return <div className="App"></div>;
}
export default App;

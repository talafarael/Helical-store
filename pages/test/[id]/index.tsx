// import { collection, getDocs, getFirestore } from "firebase/firestore";
import { GetStaticProps } from "next";
// import { useEffect } from "react";
export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: { id: params?.id }, // Access params directly
  };
};

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "coffee" } }], // Изменил путь на params с id
    fallback: false,
  };
}

// Компонент страницы
export default function Main({ id }: { id: string }) {
  //   useEffect(() => {
  //     const func = async () => {
  //       const db = getFirestore(); // Initialize Firestore
  //       const collectionRef = collection(db, "id");
  //       const snapshot = await getDocs(collectionRef); // Fetch documents

  //       // Extract document IDs
  //       const documentIds = snapshot.docs.map((doc) => doc.id);
  //       console.log(documentIds);
  //     };
  //     func();
  //   }, []);

  return <div>Текст страницы для {id}</div>; // Теперь отображается id
}

import { ICategory } from "@/type/ICategory";
import React, { useEffect, useState } from "react";
import "./menu.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { useResize } from "@/utils/screenSize";
import Link from "next/link";

export default function Menu({ activeMenu }: { activeMenu: boolean }) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  // const [l\, setLoading] = useState<boolean>(true);
  const { width } = useResize();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "category"));
        const newCategoryData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as ICategory[];

        setCategories(newCategoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        // setLoading(false);
      }
    };
    fetchCategories();
  }, []);
  console.log(categories);
  return (
    <>
      {(width && width > 1000) || activeMenu ? (
        <div className="menuContainer">
          <div className="categoryContainer">
            {categories?.map((elem: ICategory) => (
              <Link
                href={`/category/${elem.category}`}
                className="categoryDiv"
                key={elem.id}
              >
                {elem.category}
              </Link>
            ))}
          </div>{" "}
        </div>
      ) : null}
    </>
  );
}

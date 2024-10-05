"use client";
import { ICategory } from "@/type/ICategory";
import React, { useEffect, useState } from "react";
import "./menu.scss";
import { useResize } from "@/utils/screenSize";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCategories } from "@/api/getApiCategory";

export default function Menu({
  activeMenu,
  setActiveMenu,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
}) {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();

  const { id } = router.query;
  const { width } = useResize();
  useEffect(() => {
    const fetchCategories = async () => {
      setCategories(await getCategories());
    };
    fetchCategories();
  }, []);
  const handlerCloseMenu = () => {
    setActiveMenu(false);
  };

  return (
    <>
      {(width && width > 1100) || activeMenu ? (
        <div className="menuContainer">
          <nav className="categoryContainer">
            <Link
              onClick={() => handlerCloseMenu()}
              href={`/`}
              className={
                router.pathname == "/"
                  ? `activeCategoryLink categoryLink`
                  : `categoryLink`
              }
            >
              Усі товари
            </Link>
            {categories?.map((elem: ICategory) => (
              <Link
                onClick={() => handlerCloseMenu()}
                href={`/category/${elem.category}`}
                className={
                  id == elem.category
                    ? `activeCategoryLink categoryLink`
                    : `categoryLink`
                }
                key={elem.id}
              >
                {elem.category}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}

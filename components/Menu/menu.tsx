"use client";
import { ICategory } from "@/type/ICategory";
import React from "react";
import "./menu.scss";
import { useResize } from "@/utils/screenSize";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu({
  activeMenu,
  setActiveMenu,
  data,
}: {
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  activeMenu: boolean;
  data: ICategory[];
}) {
  const router = useRouter();

  const { id } = router.query;
  const { width } = useResize();

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
            {data?.map((elem: ICategory) => (
              <Link
                onClick={() => handlerCloseMenu()}
                href={`/category/${elem.id}`}
                className={
                  id == elem.id
                    ? `activeCategoryLink categoryLink`
                    : `categoryLink`
                }
                key={elem.id}
              >
                {elem.cat}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}

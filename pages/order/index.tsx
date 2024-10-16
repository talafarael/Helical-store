"use client";
import InputContainer from "@/components/InputContainer/inputContainer";
import "./order.scss";
import { useEffect, useState } from "react";
import { getOrder } from "@/api/getApiOrder";
import { IDefaultData } from "@/type/newData";
import { OderContext } from "@/utils/hooks/context";
import CardBin from "@/components/CardBin/cardBin";
import { useOrderHandlers } from "@/utils/contextOrder";
import Image from "next/image";
import leftArrow from "@/public/left-arrow.png";
import Link from "next/link";
import emptyOrderImg from "@/public/basket_12271779.png";
import Loading from "../loading";
import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Main() {
  const [order, setOrder] = useState<IDefaultData[] | undefined | string[]>();
  useEffect(() => {
    getOrder().then((result) => {
      setOrder(result);
    });
  }, []);
  const router = useRouter();
  const { handlerAdd, handlerMinus, handlerDelete, clearOrder } =
    useOrderHandlers(order, setOrder);
  return (
    <OderContext.Provider
      value={{
        handlerDelete,
        order,
        setOrder,
        handlerAdd,
        handlerMinus,
        clearOrder,
      }}
    >
      {order ? (
        <div className="orderContainer">
          {order.length >= 1 ? (
            <>
              <Head>
                <title>Корзина</title>
                <meta name="description" content="Корзина" />
              </Head>
              <button onClick={() => router.back()} className="buttonBackOrder">
                <Image
                  src={leftArrow}
                  alt={`load`}
                  width={40}
                  height={40}
                ></Image>
              </button>
              <div className="inputContainerOrder">
                <InputContainer />
              </div>
              {typeof order[0] != "string" && (
                <div className="cardContainerOrder">
                  {Array.isArray(order) &&
                    typeof order[0] != "string" &&
                    order
                      .filter(
                        (element): element is IDefaultData =>
                          typeof element !== "string"
                      )
                      .map((element: IDefaultData) => (
                        <CardBin key={element.id} data={element} />
                      ))}
                </div>
              )}
            </>
          ) : (
            <div className="emptyOrder">
              <Image
                src={emptyOrderImg}
                alt={`empty order`}
                width={70}
                height={70}
              ></Image>
              <h1>Кошик порожній</h1>
              <Link href={`/`} style={{ color: "black" }}>
                <h3>Перейти до товарів</h3>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </OderContext.Provider>
  );
}

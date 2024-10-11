"use client";
import React, { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./inputContainer.css";
import Image from "next/image";
import checkMark from "@/public/check-mark.png";
import Button from "../Button/button";

import { sendMessageToTelegram } from "@/utils/telegram";
import { OderContext } from "@/utils/hooks/context";

// import component from "@/public/Component1.svg";
type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
  Feedback?: string;
  PayMetod: string;
};

export default function InputContainer() {
  const {
    register,
    handleSubmit,

    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const orderContext = useContext(OderContext);
  const [deliver, setDeliver] = useState<string | undefined>();

  const [panelResponse, setPanelResponse] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    sendMessageToTelegram({
      data: data,
    }).then(() => {
      setDeliver("");
      orderContext?.clearOrder();
      reset();
      setPanelResponse(true);
    });
  };
  return (
    <div className={!panelResponse ? "inputContainerForm" : ""}>
      {!panelResponse ? (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="titleForm"> Форма заказа</h1>
          <input
            {...register("Name", {
              required: "заповніть поле",
              minLength: {
                value: 5,
                message: "Будь ласка, введіть імя",
              },
            })}
            type="text"
            className="input"
            placeholder={"ПІБ"}
          />
          <div className="error">
            {errors?.Name && typeof errors.Name.message === "string" && (
              <p className="textError">{errors.Name.message}</p>
            )}
          </div>
          <input
            className="input "
            {...register("Number", {
              required: "заповніть поле",
              pattern: {
                value: /^([0-9]{10}|[0-9]{12}|\+?[0-9]{13}|\+?[0-9]{11})$/,
                message: "Будь ласка, введіть правильний номер телефону",
              },
            })}
            type="tel"
            placeholder={"номер телефону"}
          />
          <div className="error">
            {errors?.Number &&
              !errors?.Name &&
              typeof errors.Number.message === "string" && (
                <p className="textError">{errors.Number.message}</p>
              )}
          </div>
          {/* <select
            className="input radioInput"
            {...register("Deliver", {
              required: false,
              onChange: (event) => handlerClear(event),
            })}
            disabled
            value="Нова пошта"
          >
            <option value="нова пощта">Нова почта</option>
            //<option value="укр почка">укр почка</option>
          </select> */}

          <div className="inputDiv">
            <input
              className="input"
              type="text"
              placeholder="Місто та номер Нової пошти"
              value={deliver}
              {...register("Deliver", {
                required: "Це поле обов’язкове",
                minLength: { value: 3, message: "Мінімум 5 символів" },
              })}
              onChange={(e) => setDeliver(e.target.value)}
            />
          </div>
          <div className="error">
            {errors?.Deliver && typeof errors.Deliver.message === "string" && (
              <p className="textError">{errors.Deliver.message}</p>
            )}
          </div>
          <select
            className="input "
            {...register("PayMetod", {
              required: "Оберіть метод оплати",
            })}
          >
            <option value="">Оберіть метод оплати</option>
            <option value="Готівка">Оплата під час отримання товару</option>
            <option value="Карткою">Оплата карткою</option>
          </select>
          <div className="error">
            {errors?.PayMetod &&
              typeof errors.PayMetod.message === "string" && (
                <p className="textError">{errors.PayMetod.message}</p>
              )}
          </div>
          <input
            className="input"
            type="text"
            {...register("Feedback", {
              required: false,
            })}
            placeholder={"Зворотній зв'язок"}
          />
          <div className="error"></div>
          <Button func={() => {}} text="купити"></Button>
        </form>
      ) : (
        <div className="orderResponseContainer">
          <div className="orderResponse">
            <Image
              src={checkMark}
              alt="checkMark"
              width={70}
              height={70}
            ></Image>

            <h1 className="titleForm titleResponse">
              Вітаю замовлення успішно оформлене
            </h1>
            <p className="subtitleForm">
              Менеджер зв’яжеться з вами протягом доби{" "}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

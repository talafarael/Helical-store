"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./inputContainer.scss";
import Button from "../Button/button";
import { NovaPoshtaSearch } from "@/utils/hooks/novaPoshtaSearch";

type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
};
interface IAdress {
  Number: string;
  Description: string;
  SettlementDescription: string;
}
export default function InputContainer() {
  const {
    register,
    handleSubmit,
    resetField,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [deliver, setDeliver] = useState<string | undefined>();
  const [adress, setAdress] = useState<IAdress[] | undefined>();
  const [stateAdress, setStateAdress] = useState<boolean>(true);
  const [constAdress, setConstAdress] = useState<IAdress | undefined>();
  const [typeDeliver, setTypeDeliver] = useState<string>("нова почта");
  const [isEnter, setIsEnter] = useState(false);
  NovaPoshtaSearch({
    deliver,
    setStateAdress,
    setConstAdress,
    typeDeliver,
    setAdress,
    setDeliver,
    isEnter,
  });
  const handlerSetAdress = (data: string, newAdress: IAdress) => {
    setIsEnter(true);
    setDeliver(data);
    setConstAdress(newAdress);
    setStateAdress(false);
    setTimeout(() => setIsEnter(false), 0);
  };
  const handlerClear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeDeliver(event.target.value);
    console.log(event.target.value);
    setDeliver("");
    setStateAdress(true);
    setAdress(undefined);
    setConstAdress(undefined);
  };
console.log("Aaaa")
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  
  };
  return (
    <div className="inputContainerForm">
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
              value: /^([0-9]{10}|[0-9]{12})$/,
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
        <select
          className="input radioInput"
          {...register("Deliver", {
            required: true,
            onChange: (event) => handlerClear(event),
          })}
        >
          <option value="нова почта">нова почта</option>
          <option value="укр почка">укр почка</option>
        </select>
        <div className="inputDiv">
          <input
            className="input"
            type="text"
            placeholder="місто номер "
            value={deliver}
            onKeyPress={(event) => {
              if (event.key === "Enter" && adress?.length == 1) {
                handlerSetAdress(
                  `${adress[0].SettlementDescription} ${adress[0].Number}`,
                  adress[0]
                );
              }
            }}
            onChange={(e) => setDeliver(e.target.value)}
          />
          <div className="adressContainer">
            {stateAdress &&
              adress?.map((elem, index) => (
                <p
                  onClick={() =>
                    handlerSetAdress(
                      `${elem.SettlementDescription} ${elem.Number}`,
                      elem
                    )
                  }
                  className="liAdress"
                  key={index}
                >
                  {elem.Description}
                </p>
              ))}
            {constAdress?.Description}
          </div>
        </div>
        <Button func={() => {}} text="купить"></Button>
      </form>
    </div>
  );
}

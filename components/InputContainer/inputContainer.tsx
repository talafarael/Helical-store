"use client";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./inputContainer.scss";
import Button from "../Button/button";

type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
};
interface IAdress {
  Description: string;
}
export default function InputContainer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [deliver, setDeliver] = useState<number | undefined>();
  const [adress, setAdress] = useState<string[] | undefined>();
  useEffect(() => {
    const handler = setTimeout(async () => {
      await fetch("https://api.novaposhta.ua/v2.0/json/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          apiKey: "0aab254867b1b4b8aea5abf2ebce14d9",
          modelName: "AddressGeneral",
          calledMethod: "getWarehouses",
          methodProperties: {
            WarehouseId: `${deliver}`,
            Limit: "3",
          },
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res.data);
          const arr = res.data.map((elem: IAdress) => elem.Description);
          setAdress(arr);
        });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [deliver]);

  // const [Name, setName] = useState<string>("");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  console.log(adress);
  return (
    <div className="inputContainerForm">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
          placeholder={"name"}
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
          placeholder={"number"}
        />{" "}
        <div className="error">
          {errors?.Number &&
            !errors?.Name &&
            typeof errors.Number.message === "string" && (
              <p className="textError">{errors.Number.message}</p>
            )}
        </div>
        <select
          className="input radioInput"
          {...register("Deliver", { required: true })}
        >
          <option value="нова почта">нова почта</option>
          <option value="укр почка">укр почка</option>
        </select>
        <div> 
          <input
            className="input "
            type="text"
            onChange={(e) => setDeliver(+e.target.value)}
          />
          <div className="adressContainer">
            {adress && adress.map((elem, index) => <p key={index}>{elem}</p>)}
          </div>
        </div>
        <Button func={() => {}} text="купить"></Button>
      </form>
    </div>
  );
}

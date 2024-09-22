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
  Number: string;
  Description: string;
  SettlementDescription: string;
}
export default function InputContainer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const [deliver, setDeliver] = useState<string | undefined>();
  const [adress, setAdress] = useState<IAdress[] | undefined>();
  const [stateAdress, setStateAdress] = useState<boolean>(true);
  const [constAdress, setConstAdress] = useState<IAdress | undefined>();
  const [typeDeliver, setTypeDeliver] = useState<string>("нова почта");
  useEffect(() => {
    const handler = setTimeout(async () => {
      console.log(typeof deliver);
      if (typeof deliver === "string" && typeDeliver === "нова почта") {
        const wordPart = deliver.match(/[а-яА-ЯіїєґІЇЄҐ]+/g)?.join("") || "";
        const numberPart = parseInt(deliver.match(/\d+/g)?.join("") || "0", 10);
        setStateAdress(true);
        setConstAdress(undefined);
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
              CityName: `${wordPart}`,
              WarehouseId: `${numberPart}`,
              Limit: "3",
            },
          }),
        })
          .then((data) => data.json())
          .then((res) => {
            console.log(res.data);
            const arr = res.data.map((elem: IAdress) => {
              return {
                Number: elem.Number,
                Description: elem.Description,
                SettlementDescription: elem.SettlementDescription,
              };
            });
            setAdress(arr);
          });
      }
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [deliver]);
  const handlerSetAdress = (data: string, newAdress: IAdress) => {
    setDeliver(data);
    setConstAdress(newAdress);
    setStateAdress(false);
  };
  const handlerClear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTypeDeliver(event.target.value);
    console.log(event.target.value);
    setDeliver("");
    setStateAdress(true);
    setAdress(undefined);
    setConstAdress(undefined);
  };
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

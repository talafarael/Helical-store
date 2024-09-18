"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./inputContainer.scss";
import Button from "../Button/button";

type Inputs = {
  Name: string;
  Number: number;
  Deliver: string;
};
export default function InputContainer() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  // const [Name, setName] = useState<string>("");
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

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
        <select className="input radioInput" {...register("Deliver", { required: true })}>
          <option value="нова почта">нова почта</option>
          <option value="укр почка">укр почка</option>
        </select>
        <Button func={() => {}} text="купить"></Button>
      </form>
    </div>
  );
}

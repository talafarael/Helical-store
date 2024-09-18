"use client";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type Inputs = {
  Name: string;
  Number: number;
  Deliver:string;
};
export default function InputContainer() {
    const {
      register,
      handleSubmit,

      formState: { errors },
    } = useForm<Inputs>();
    const [Number, setNumber] = useState<number>(0);
    const [Deliver, setDeliver] = useState<string>('');
    const [Name, setName] = useState<string>('');
    const onSubmit: SubmitHandler<Inputs>= (data) =>{
console.log(data)
    }
  
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <input defaultValue="test" {...register("example")} />
        <input {...register("exampleRequired", { required: true })} />
        <input
          {...register("Number", {
            required: "заповніть поле",
            pattern: {
              value: /^([0-9]{10}|[0-9]{12})$/,
              message: "Будь ласка, введіть правильний номер телефону",
            },
          })}
          type="tel"
            value={Number}
            //  placeholder={props.number_placeholder}
            //  onChange={input_number}
          className="input_number"
        />
        <button type="submit" />
      </form>
    </div>
  );
}

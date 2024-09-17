"use client";
import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
// type Inputs = {
//   example: string;
//   Number: number;
// };
export default function InputContainer() {
  //   const {
  //     register,
  //     handleSubmit,

  //     formState: { errors },
  //   } = useForm<Inputs>();
  //   const [Number, setNumber] = useState<IUseState>("");
  //   const onSubmit
  //   : SubmitHandler<Inputs>
  //    = (
  //     // data
  // ) =>
  //  console.log(data);
  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        
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
             placeholder={props.number_placeholder}
             onChange={input_number}
          className="input_number"
        />
        <button type="submit" />
      </form> */}
    </div>
  );
}

import { ICountState } from "@/type/hooksState";
import React from "react";

export const CountContext = React.createContext<ICountState | undefined>(
  undefined
);

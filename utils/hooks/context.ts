import { ICountState, IOrdertState } from "@/type/hooksState";

import React from "react";

export const CountContext = React.createContext<
  ICountState | undefined
>(undefined);

export const OderContext = React.createContext<
IOrdertState | undefined
>(undefined);

import React from "react";

export interface ICountState {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}
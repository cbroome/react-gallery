import React from "react";
import { SimpleNavMenu } from "../atoms";

interface ICloseableView {
  children: any;
}

export function CloseableView({ children }: ICloseableView) {
  return (
    <>
      <SimpleNavMenu />
      {children}
      <SimpleNavMenu />
    </>
  );
}

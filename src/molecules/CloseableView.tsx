import React from "react";
import { SimpleNavMenu } from "../atoms";

interface ICloseableView {
  children: any;
  setItem: Function;
  closeFunction: Function;
}

export function CloseableView({
  setItem,
  closeFunction,
  children,
}: ICloseableView) {
  return (
    <>
      <SimpleNavMenu setItem={setItem} closeFunction={closeFunction} />
      {children}
      <SimpleNavMenu setItem={setItem} closeFunction={closeFunction} />
    </>
  );
}

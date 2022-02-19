import React from "react";

interface ICloseableView {
  children: any;
}

export function CloseableView({ children }: ICloseableView) {
  return (
    <>
      <div>Close</div>
      <div>Previous</div>
      <div>Next</div>
      {children}
    </>
  );
}

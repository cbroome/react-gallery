import React from "react";
import styled from "styled-components";
import { SimpleNavMenu } from "../atoms";
import { ItemNav } from "../lib";

interface ICloseableView {
  children: any;
  setItem: Function;
  closeFunction: Function;
  nextItemFunc: TypeReactOnClick;
  prevItemFunc: TypeReactOnClick;
}

const ItemWrapper = styled.div``;

/**
 * Nests the content in a nav menu
 *
 * @param param0
 * @returns
 */
export function CloseableView({
  setItem,
  closeFunction,
  children,
  nextItemFunc,
  prevItemFunc,
}: ICloseableView) {
  return (
    <div className="rg-closeable-view">
      <SimpleNavMenu
        setItem={setItem}
        closeFunction={closeFunction}
        setNextItem={nextItemFunc}
        setPreviousItem={prevItemFunc}
      />
      <ItemWrapper className="rg-item-wrapper">{children}</ItemWrapper>
      <SimpleNavMenu
        setItem={setItem}
        closeFunction={closeFunction}
        setNextItem={nextItemFunc}
        setPreviousItem={prevItemFunc}
      />
    </div>
  );
}

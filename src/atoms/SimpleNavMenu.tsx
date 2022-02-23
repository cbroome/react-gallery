import React from "react";
import styled from "styled-components";

interface ISimpleNavMenu {
  previousItem?: IItem;
  nextItem?: IItem;
  closeFunction: Function;
  setItem: Function;
}

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CloseWrapper = styled.span`
  cursor: pointer;
`;

/**
 * A container with the ability to load the next and previous items,
 * as well as close.
 *
 * @param param0
 * @returns
 */
export function SimpleNavMenu({
  closeFunction,
  previousItem,
  nextItem,
  setItem,
}: ISimpleNavMenu) {
  const close = () => {
    console.log("Clicked close");
    closeFunction();
  };

  const previous = () => {
    console.log("Clicked previous");
    setItem(previousItem);
  };

  const next = () => {
    console.log("Clicked next");
    setItem(nextItem);
  };

  return (
    <MenuWrapper className="rg-simple-nav-menu">
      <div onClick={previous}>Previous</div>
      <CloseWrapper onClick={close}>Close</CloseWrapper>
      <div onClick={next}>Next</div>
    </MenuWrapper>
  );
}

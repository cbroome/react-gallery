import React from "react";
import styled from "styled-components";

interface ISimpleNavMenu {
  previousItem?: IItem;
  nextItem?: IItem;
}

const MenuWrapper = styled.div`
  disply: flex;
  justify-content: space-between;
`;

export function SimpleNavMenu({ previousItem, nextItem }: ISimpleNavMenu) {
  const close = () => {
    console.log("Clicked close");
  };

  const previous = () => {
    console.log("Clicked previous");
  };

  const next = () => {
    console.log("Clicked next");
  };

  return (
    <MenuWrapper>
      <div onClick={previous}>Previous</div>
      <div onClick={close}>Close</div>
      <div onClick={next}>Next</div>
    </MenuWrapper>
  );
}

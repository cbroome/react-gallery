import React from "react";
import styled from "styled-components";

interface ISimpleNavMenu {
  setPreviousItem?: TypeReactOnClick;
  setNextItem?: TypeReactOnClick;
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
  setPreviousItem,
  setNextItem,
}: ISimpleNavMenu) {
  const close = () => {
    closeFunction();
  };

  return (
    <MenuWrapper className="rg-simple-nav-menu">
      <div>
        {setPreviousItem && <div onClick={setPreviousItem}>Previous</div>}
      </div>
      <CloseWrapper onClick={close}>Close</CloseWrapper>
      <div>{setNextItem && <div onClick={setNextItem}>Next</div>}</div>
    </MenuWrapper>
  );
}

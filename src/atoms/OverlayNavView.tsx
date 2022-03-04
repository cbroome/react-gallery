import React, { ReactNode } from "react";
import styled from "styled-components";

interface IOverlayNavView {
  children: ReactNode;
}

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const Underlay = styled.div`
  height: 100%;
  width: 100%;
`;

const NavBar = styled.div`
  height: 100%;
  width: 12%;
  text-align: center;
  vertical-align: middle;
`;

export function OverlayNavView({ children }: IOverlayNavView) {
  const next = () => {
    console.log("NEXT");
  };

  const previous = () => {
    console.log("PREVIOUS");
  };

  return (
    <>
      <Overlay>
        <div onClick={next}>&lt;</div>
        <div onClick={previous}>&gt;</div>
      </Overlay>
      <Underlay>{children}</Underlay>
    </>
  );
}

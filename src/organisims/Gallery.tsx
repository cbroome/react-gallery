import React from "react";
import styled from "styled-components";
import { GridLayout } from "../molecules";

const GalleryWrapper = styled.div``;

interface GalleryProps {}

export function Gallery() {
  return (
    <>
      <GalleryWrapper className="react-gallery-wrapper">
        <GridLayout />
      </GalleryWrapper>
    </>
  );
}

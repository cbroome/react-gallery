import React from "react";
import styled from "styled-components";
import { isEmpty } from "lodash";
import { GridLayout } from "../molecules";

const GalleryWrapper = styled.div``;

export function Gallery({ items }: IGallery) {
  if (isEmpty(items)) {
    console.error("Pass in a populated array for the Gallery component");
    throw Error("Error! trying to initialize React Gallery without items");
  }

  return (
    <>
      <GalleryWrapper className="react-gallery-wrapper">
        <GridLayout items={items} />
      </GalleryWrapper>
    </>
  );
}

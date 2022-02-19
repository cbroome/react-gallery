import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

const ThumbnailWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export function Thumbnail({ url }: IThumbnail) {
  const thumbnailClick = () => {
    console.log("Thumbnail click!");
  };

  return (
    <ThumbnailWrapper onClick={thumbnailClick}>
      <Image url={url} />
    </ThumbnailWrapper>
  );
}

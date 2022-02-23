import React from "react";
import styled from "styled-components";
import { Image } from "./Image";

interface IThumbnail {
  url: string;
  altText?: string;
  onClick?: Function;
}

const ThumbnailWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

/**
 * Generic wrapper for a Thumbnail component
 *
 * @param param0
 * @returns
 */
export function Thumbnail({ url, altText, onClick }: IThumbnail) {
  const thumbnailClick = () => {
    console.log("Thumbnail click!");
    onClick && onClick();
  };

  return (
    <ThumbnailWrapper onClick={thumbnailClick}>
      <Image url={url} altText={altText} />
    </ThumbnailWrapper>
  );
}

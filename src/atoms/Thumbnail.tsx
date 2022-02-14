import React from "react";
import { Image } from "./Image";

export function Thumbnail({ url }: IThumbnail) {
  const thumbnailClick = () => {
    console.log("Thumbnail click!");
  };

  return (
    <div onClick={thumbnailClick}>
      <Image url={url} />
    </div>
  );
}

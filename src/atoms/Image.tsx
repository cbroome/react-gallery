import React from "react";

interface ImageProps {
  url: string;
  altText?: string;
  description?: string;
}

export function Image({ url, altText, description }: ImageProps) {
  return (
    <>
      <img src={url} alt={altText} />
    </>
  );
}

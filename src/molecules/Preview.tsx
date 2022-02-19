import React from "react";
import { Image, Video } from "../atoms";

interface IPreview {
  item: IItem;
  setSelectedItem: Function;
}

/**
 * Show a full-sized preview of the gallery item. This will
 * also show the title and description
 *
 * @param param0
 * @returns
 */
export function Preview({ item }: IPreview) {
  const actualPreview =
    item.type == "image" ? <Image url={item.url} /> : <Video />;

  return (
    <>
      <div>{item.title}</div>
      <div>{actualPreview}</div>
      <div>{item.description}</div>
    </>
  );
}

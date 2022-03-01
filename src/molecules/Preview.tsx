import React from "react";
import { Header1, Image, Video } from "../atoms";
import { ItemNav } from "../lib";

interface IPreview {
  itemNav: ItemNav;
}

/**
 * Show a full-sized preview of the gallery item. This will
 * also show the title and description
 *
 * @param param0
 * @returns
 */
export function Preview({ itemNav }: IPreview) {
  let url: string | undefined;
  let target: string = "_self";
  const item = itemNav.selectedItem;
  if (item?.allowDirectLink) {
    url = item.externalLink || item.resourceUrl;
    // Open images in a new window
    target = "_blank";
  }

  const actualPreview =
    item.type === "image" ? <Image url={item.resourceUrl} /> : <Video />;

  return (
    <div className="rg-preview">
      <Header1>{item.title}</Header1>
      <a href={url} target={target}>
        {actualPreview}
      </a>
      <div>{item.description}</div>
    </div>
  );
}

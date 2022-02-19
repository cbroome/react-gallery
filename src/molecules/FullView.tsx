import React from "react";

interface IFullView {
  item: IItem;
  clickThroughLink?: string;
}

export function FullView({ item, clickThroughLink }: IFullView) {
  if (item.type == "image") {
  }
  return <>Full View!</>;
}

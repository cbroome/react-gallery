import React from "react";
import { Thumbnail } from "../atoms";
import styled from "styled-components";

interface IGridLayout {
  items: (IVideo | IImage)[];
}

const Grid = styled.div`
  display: flex;
`;

const GridCell = styled.div`
  height: 150px;
  width: 150px;
  border: 1px solid;
  border-radius: 3px;
  padding: 5px;
  margin: 10px;
`;

export function GridLayout({ items }: IGridLayout) {
  const cellClick = () => {
    console.log("Layout Cell Clicked!");
  };
  return (
    <Grid>
      {items?.map((item, index) => {
        // TODO - determine whether is an image
        const url = item.thumbnail?.url || "";
        return (
          <GridCell key={`grid-cell-${index}`} onClick={cellClick}>
            <Thumbnail url={url} />
          </GridCell>
        );
      })}
    </Grid>
  );
}

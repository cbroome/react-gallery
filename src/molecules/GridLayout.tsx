import React, { useState } from "react";
import { Thumbnail } from "../atoms";
import styled from "styled-components";
import { Preview } from ".";
import { CloseableView } from "./CloseableView";

interface IGridLayout {
  items: IItem[];
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
  cursor: pointer;
`;

export function GridLayout({ items }: IGridLayout) {
  const [selectedItem, setSelectedItem] = useState<IItem | undefined | null>();
  const cellClick = (item: IItem) => {
    return () => {
      console.log("Layout Cell Clicked!");
      setSelectedItem(item);
    };
  };

  const closeFunction = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {selectedItem && (
        <CloseableView setItem={setSelectedItem} closeFunction={closeFunction}>
          <Preview item={selectedItem} setSelectedItem={setSelectedItem} />
        </CloseableView>
      )}
      {!selectedItem && (
        <Grid>
          {items?.map((item, index) => {
            const url = item.thumbnail?.url || "";
            return (
              <GridCell key={`grid-cell-${index}`} onClick={cellClick(item)}>
                <Thumbnail url={url} />
              </GridCell>
            );
          })}
        </Grid>
      )}
    </>
  );
}

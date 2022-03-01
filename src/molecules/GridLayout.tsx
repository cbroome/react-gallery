import React, { useState } from "react";
import { Thumbnail } from "../atoms";
import styled from "styled-components";
import { Preview } from "./Preview";
import { CloseableView } from "./CloseableView";
import { sortBy } from "lodash";
import { ItemNav } from "../lib";

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
  const [selectedItem, setSelectedItem] = useState<
    ItemNav | undefined | null
  >();
  const sortedItems = sortBy(items, "order");

  const cellClick = (item: IItem) => {
    return () => {
      const navItem = ItemNav.factory(sortedItems, item);
      setSelectedItem(navItem);
    };
  };

  const next = (): TypeReactOnClick => {
    const nextItem = selectedItem?.getNextItem();
    if (nextItem) {
      return (event: React.MouseEvent) => {
        const navItem = ItemNav.factory(sortedItems, nextItem);
        setSelectedItem(navItem);
      };
    }
  };

  const previous = (): TypeReactOnClick => {
    const previousItem = selectedItem?.getPreviousItem();
    if (previousItem) {
      return (event: React.MouseEvent) => {
        const navItem = ItemNav.factory(sortedItems, previousItem);
        setSelectedItem(navItem);
      };
    }
  };

  const closeFunction = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {selectedItem && (
        <CloseableView
          setItem={setSelectedItem}
          closeFunction={closeFunction}
          nextItemFunc={next()}
          prevItemFunc={previous()}
        >
          <Preview itemNav={selectedItem} />
        </CloseableView>
      )}
      {!selectedItem && (
        <Grid className="rg-grid">
          {sortedItems?.map((item, index) => {
            const url = item.thumbnail?.url || "";
            return (
              <GridCell
                key={`grid-cell-${index}`}
                onClick={cellClick(item)}
                title={item.title}
                className="rg-grid-cell"
              >
                <Thumbnail url={url} height={150} width={150} />
              </GridCell>
            );
          })}
        </Grid>
      )}
    </>
  );
}

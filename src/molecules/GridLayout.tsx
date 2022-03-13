import React from 'react';
import { Thumbnail } from '../atoms';
import styled from 'styled-components';
import { Preview } from './Preview';
import { CloseableView } from './CloseableView';
import { GalleryState } from '../state';

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
    const { activeItem, sortedItems, setActiveItem } =
        GalleryState.useContainer();

    const selectItemFunc = (item: IItem) => {
        return () => {
            setActiveItem(item);
        };
    };

    return (
        <>
            {activeItem && (
                <CloseableView>
                    <Preview />
                </CloseableView>
            )}
            {!activeItem && (
                <Grid className="rg-grid">
                    {sortedItems?.map((item, index) => {
                        const url = item.thumbnail?.url || '';
                        return (
                            <GridCell
                                key={`grid-cell-${index}`}
                                title={item.title}
                                className="rg-grid-cell"
                            >
                                <Thumbnail
                                    url={url}
                                    height={150}
                                    width={150}
                                    onClick={selectItemFunc(item)}
                                />
                            </GridCell>
                        );
                    })}
                </Grid>
            )}
        </>
    );
}

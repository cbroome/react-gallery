import React from 'react';
import { PageNav, Thumbnail } from '../atoms';
import styled from 'styled-components';
import { Preview } from './Preview';
import { CloseableView } from './CloseableView';
import { GalleryState } from '../state';
import { TItemUnioned } from '../types';

interface IGridLayout {
    items: TItemUnioned[];
}

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const GridCell = styled.div`
    height: 250px;
    width: 200px;
    border: 1px solid;
    border-radius: 3px;
    padding: 5px;
    margin: 10px;
    cursor: pointer;

    :hover {
        background: rgb(100, 100, 100, 0.2);
    }
`;

const Title = styled.div`
    font-size: 1.2em;
`;

export function GridLayout({ items }: IGridLayout) {
    const { activeItem, setActiveItem, displayedItems, usePaging } =
        GalleryState.useContainer();

    const selectItemFunc = (item: TItemUnioned) => {
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
                <>
                    {usePaging && <PageNav />}

                    <Grid className="rg-grid">
                        {displayedItems?.map((item, index) => {
                            const url = item?.thumbnail?.url || '';
                            return (
                                <GridCell
                                    key={`grid-cell-${index}`}
                                    title={item?.title}
                                    className="rg-grid-cell"
                                >
                                    <Thumbnail
                                        url={url}
                                        height={200}
                                        width={200}
                                        onClick={selectItemFunc(item!!)}
                                    />

                                    {item?.title && <Title>{item.title}</Title>}
                                </GridCell>
                            );
                        })}
                    </Grid>
                </>
            )}
        </>
    );
}

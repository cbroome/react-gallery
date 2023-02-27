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

const ThumbnailWrapper = styled.div`
    height: 400px;
`;

const Title = styled.div`
    margin: 5px 0;
    text-align: center;
    text-overflow: ellipsis;
`;

export function GridLayout({ items }: IGridLayout) {
    const { activeItem, setActiveItem, displayedItems, usePaging } =
        GalleryState.useContainer();

    const selectItemFunc = (item: TItemUnioned) => {
        return () => {
            let shouldContinue = true;
            // Allow the callback to prevent selection
            if (item.callback) {
                shouldContinue = item.callback(item);
            }
            if (shouldContinue !== false) {
                setActiveItem(item);
            }
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

                    <Grid className="rg-grid" aria-label="gallery grid">
                        {displayedItems?.map((item, index) => {
                            const url = item?.thumbnail?.url || '';
                            return (
                                <GridCell
                                    key={`grid-cell-${index}`}
                                    title={item?.title}
                                    className="rg-grid-cell"
                                    onClick={selectItemFunc(item!!)}
                                    aria-label={item?.title}
                                >
                                    <ThumbnailWrapper className="rg-thumbnail-wrapper">
                                        <Thumbnail url={url} />
                                    </ThumbnailWrapper>

                                    {item?.title && (
                                        <Title className="rg-title">
                                            {item.title}
                                        </Title>
                                    )}
                                </GridCell>
                            );
                        })}
                    </Grid>
                </>
            )}
        </>
    );
}

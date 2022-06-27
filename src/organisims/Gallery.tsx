import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { GridLayout } from '../molecules';
import { GalleryState } from '../state/GalleryState';
import { IGallery, IItem, TGalleryItem, TSortOrder } from '../types';

const GalleryWrapper = styled.div``;

export function Gallery({
    items,
    sortOrder = 'asc',
    selectedId,
    returnToGalleryCallback,
    showItemNav = true,
    usePaging = false,
    itemsPerPage = 10,
}: IGallery) {
    if (isEmpty(items)) {
        console.error('Pass in a populated array for the Gallery component');
        throw Error('Error! trying to initialize React Gallery without items');
    }

    const [providedItems, setProvidedItems] = useState<TGalleryItem[]>(items);
    const [providedSelectedId, setProvidedSelectedId] = useState<
        string | undefined
    >(selectedId);
    const [
        providedReturnToGalleryCallback,
        setProvidedReturnToGalleryCallback,
    ] = useState<Function | undefined>(returnToGalleryCallback);
    const [providedItemsPerPage, setProvidedItemsPerPage] =
        useState<number>(itemsPerPage);
    const [providedUsePaging, setProvidedUsePaging] =
        useState<boolean>(usePaging);
    const [providedSortOrder, setProvidedSortOrder] =
        useState<TSortOrder>(sortOrder);
    const [providedShowItemNav, setProvidedShowItemNav] =
        useState<boolean>(showItemNav);

    useEffect(() => {
        setProvidedItems(items);
        setProvidedSelectedId(selectedId);
        setProvidedReturnToGalleryCallback(returnToGalleryCallback);
        setProvidedItemsPerPage(itemsPerPage);
        setProvidedUsePaging(usePaging);
        setProvidedSortOrder(sortOrder);
        setProvidedShowItemNav(showItemNav);
    }, [
        items,
        selectedId,
        returnToGalleryCallback,
        itemsPerPage,
        usePaging,
        sortOrder,
        showItemNav,
    ]);

    const statePackage = {
        galleryItems: providedItems,
        selectedId: providedSelectedId,
        returnToGalleryCallback: providedReturnToGalleryCallback,
        showItemNav: providedShowItemNav,
        sortOrder: providedSortOrder,
        usePaging: providedUsePaging,
        itemsPerPage: providedItemsPerPage,
    };

    return (
        <>
            <GalleryState.Provider initialState={statePackage}>
                <GalleryWrapper className="react-gallery-wrapper">
                    <GridLayout items={items} />
                </GalleryWrapper>
            </GalleryState.Provider>
        </>
    );
}

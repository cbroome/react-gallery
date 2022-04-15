import React from 'react';
import { PageNav } from '../atoms';
import { GalleryState } from '../state';

export function PagedView() {
    const { activeItem, sortedItems, setActiveItem } =
        GalleryState.useContainer();

    return (
        <>
            <PageNav />
        </>
    );
}

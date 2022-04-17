import React from 'react';
import { PageNav } from '../atoms';
import { PageState, usePage } from '../state';
import { Gallery } from './Gallery';

interface IPagedGallery extends IGallery {
    itemsPerPage?: number;
    currentPage?: number;
    showSearch?: boolean;
    items: IItem[];
}

interface IStatefulGallery {
    selectedId?: string;
    returnToGalleryCallback?: Function;
}

function StatefullGallery({
    selectedId,
    returnToGalleryCallback,
}: IStatefulGallery) {
    const { currentItems } = PageState.useContainer();

    return (
        <Gallery
            items={currentItems!!}
            selectedId={selectedId}
            returnToGalleryCallback={returnToGalleryCallback}
        />
    );
}

export function PagedGallery({
    items,

    /**
     * Current page where "1" is the first page
     */
    currentPage,
    selectedId,
    itemsPerPage = 10,
    showSearch = true,
}: IPagedGallery) {
    const pageState = {
        currentPage,
        itemsPerPage,
        allItems: items,
    };

    return (
        <>
            <PageState.Provider initialState={pageState}>
                <PageNav />
                <StatefullGallery selectedId={selectedId} />
            </PageState.Provider>
        </>
    );
}

import React from 'react';
import { PageNav } from '../atoms';
import { PageState } from '../state';
import { Gallery } from './Gallery';

interface IPagedGallery {
    itemsPerPage?: number;
    currentPage?: number;
    showSearch?: boolean;
    items: IItem[];
}

export function PagedGallery({
    items,
    currentPage,
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
                <Gallery items={items} />
            </PageState.Provider>
        </>
    );
}

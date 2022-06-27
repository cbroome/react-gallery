import React from 'react';
import { GalleryState } from '../state';
import { PageNav, pageNavAriaLabel } from './PageNav';
import { render, screen } from '@testing-library/react';
import { IItemImage } from '../types';

describe('<PageNav>', function () {
    it("should render when there's more than one page", function () {
        render(
            <>
                <GalleryState.Provider
                    initialState={{
                        galleryItems: [{} as IItemImage, {} as IItemImage],
                        sortOrder: 'asc',
                        showItemNav: true,
                        usePaging: true,
                        itemsPerPage: 1,
                    }}
                >
                    <PageNav />
                </GalleryState.Provider>
            </>
        );

        expect(screen.getByLabelText(pageNavAriaLabel)).toBeTruthy();
    });

    it("should not render when there's less than one page", function () {
        render(
            <>
                <GalleryState.Provider
                    initialState={{
                        galleryItems: [{} as IItemImage, {} as IItemImage],
                        sortOrder: 'asc',
                        showItemNav: true,
                        usePaging: true,
                        itemsPerPage: 10,
                    }}
                >
                    <PageNav />
                </GalleryState.Provider>
            </>
        );

        expect(() => {
            screen.getByLabelText(pageNavAriaLabel);
        }).toThrow();
    });
});

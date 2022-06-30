import _, { orderBy } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';
import { TGalleryItem, TypeReactOnClick } from '../types';

interface IGalleryStateProps {
    galleryItems?: TGalleryItem[];
    selectedId?: string;
    returnToGalleryCallback?: Function;
    showItemNav: boolean;
    itemsPerPage: number;
    usePaging: boolean;
    sortOrder: 'asc' | 'desc';
}

/**
 * Maintain the currently selected items
 *
 * @param initialState
 * @returns
 */
export function useGallery(
    initialState: IGalleryStateProps = {
        showItemNav: true,
        sortOrder: 'asc',
        itemsPerPage: 10,
        usePaging: false,
    }
) {
    const {
        galleryItems,
        selectedId,
        returnToGalleryCallback,
        showItemNav,
        itemsPerPage,
        sortOrder,
        usePaging,
    } = initialState;

    const [items, setItems] = useState(galleryItems);
    const [activeItem, setActiveItem] = useState<TGalleryItem>();

    useEffect(() => {
        setItems(galleryItems);
    }, [galleryItems]);

    useEffect(() => {
        let activeItem;
        if (selectedId) {
            activeItem = items?.filter((item) => item?.id === selectedId)[0];
        }
        setActiveItem(activeItem);
    }, [selectedId, items]);

    const [nextItem, setNextItem] = useState<TGalleryItem>();
    const [prevItem, setPrevItem] = useState<TGalleryItem>();
    const clearActiveItem = () => {
        setActiveItem(undefined);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState<TGalleryItem[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const sortedItems = useMemo(
        () => orderBy(items, ['order'], [sortOrder]),
        [items, sortOrder]
    );

    useMemo(() => {
        if (activeItem) {
            const activeIndex = sortedItems.indexOf(activeItem);
            const nextItem = sortedItems[activeIndex + 1];
            const prevItem = sortedItems[activeIndex - 1];

            setNextItem(nextItem);
            setPrevItem(prevItem);
        }
    }, [activeItem, sortedItems]);

    useMemo(() => {
        let currentItems: TGalleryItem[] = [];
        if (usePaging) {
            const itemsLength = sortedItems.length || 0;
            const totalPages = Math.ceil(itemsLength / itemsPerPage);
            const startIndex = (currentPage - 1) * itemsPerPage;
            const endIndex = Number(startIndex) + Number(itemsPerPage);
            currentItems = sortedItems.slice(startIndex, endIndex);
            setTotalPages(totalPages);
        } else {
            currentItems = sortedItems;
        }
        setDisplayedItems(currentItems);
    }, [currentPage, sortedItems, itemsPerPage, usePaging]);

    const onClickHandler = (item: TGalleryItem): TypeReactOnClick => {
        return () => {
            setActiveItem(item);
        };
    };

    const returnToGallery = useCallback(() => {
        let earlyBreak;
        if (returnToGalleryCallback) {
            earlyBreak = returnToGalleryCallback();
        }
        if (earlyBreak !== false) {
            setActiveItem(undefined);
        }
    }, [returnToGalleryCallback, setActiveItem]);

    return {
        activeItem,
        setActiveItem,
        sortedItems,
        nextItem,
        prevItem,
        clearActiveItem,
        onClickHandler,
        returnToGallery,
        showItemNav,
        displayedItems,
        setCurrentPage,
        totalPages,
        currentPage,
        usePaging,
    };
}

export const GalleryState = createContainer(useGallery);

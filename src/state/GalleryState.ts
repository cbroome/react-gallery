import { orderBy, sortBy } from 'lodash';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

interface IGalleryStateProps {
    items?: IItem[];
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
    // TODO - support logic for having an initial selected Item
    const {
        items,
        selectedId,
        returnToGalleryCallback,
        showItemNav,
        itemsPerPage,
        sortOrder,
        usePaging,
    } = initialState;

    let selectedItem: IItem | undefined;
    if (selectedId) {
        selectedItem = items?.filter((item) => item.id === selectedId)[0];
    }

    const [activeItem, setActiveItem] = useState<IItem | undefined>(
        selectedItem
    );
    const [nextItem, setNextItem] = useState<IItem | undefined>();
    const [prevItem, setPrevItem] = useState<IItem | undefined>();
    const clearActiveItem = () => {
        setActiveItem(undefined);
    };
    const [currentPage, setCurrentPage] = useState(1);
    const [displayedItems, setDisplayedItems] = useState<IItem[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const sortedItems = useMemo(() => orderBy(items, ['order'], [sortOrder]), [
        items,
    ]);

    useMemo(() => {
        if (activeItem) {
            const activeIndex = sortedItems.indexOf(activeItem);
            const nextItem = sortedItems[activeIndex + 1];
            const prevItem = sortedItems[activeIndex - 1];

            setNextItem(nextItem);
            setPrevItem(prevItem);

            if (activeItem.callback) {
                activeItem.callback(activeItem);
            }
        }
    }, [activeItem, sortedItems]);

    useMemo(() => {
        let currentItems: IItem[] = [];
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

    const onClickHandler = (item: IItem): TypeReactOnClick => {
        return () => {
            setActiveItem(item);
        };
    };

    const returnToGallery = useCallback(() => {
        setActiveItem(undefined);
        if (returnToGalleryCallback) {
            returnToGalleryCallback();
        }
    }, [setActiveItem, returnToGalleryCallback]);

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
    };
}

export const GalleryState = createContainer(useGallery);

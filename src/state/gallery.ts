import { sortBy } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

interface IGalleryStateProps {
    items?: IItem[];
    selectedId?: string;
}

/**
 * Maintain the currently selected items
 *
 * @param initialState
 * @returns
 */
export function useGallery(initialState: IGalleryStateProps = {}) {
    // TODO - support logic for having an initial selected Item
    const { items, selectedId } = initialState;

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

    const sortedItems = useMemo(() => sortBy(items, 'order'), [items]);

    useEffect(() => {
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

    const onClickHandler = (item: IItem): TypeReactOnClick => {
        return () => {
            setActiveItem(item);
        };
    };

    return {
        activeItem,
        setActiveItem,
        sortedItems,
        nextItem,
        prevItem,
        clearActiveItem,
        onClickHandler,
    };
}

export const GalleryState = createContainer(useGallery);

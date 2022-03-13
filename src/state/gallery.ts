import { sortBy } from 'lodash';
import { useEffect, useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

interface IGalleryStateProps {
    items?: IItem[];
    selectedItem?: number;
}

export function useGallery(initialState: IGalleryStateProps = {}) {
    const { items, selectedItem } = initialState;

    const [activeItem, setActiveItem] = useState<IItem | undefined>();
    const [nextItem, setNextItem] = useState<IItem | undefined>();
    const [prevItem, setPrevItem] = useState<IItem | undefined>();
    const [nextItemFunc, setNextItemFunc] = useState<TypeReactOnClick>();
    const [prevItemFunc, setPrevItemFunc] = useState<TypeReactOnClick>();
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

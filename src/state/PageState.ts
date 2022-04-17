import { useState } from 'react';
import { createContainer } from 'unstated-next';

interface IPage {
    itemsPerPage: number;
    allItems: IItem[];
}

export function usePage(
    initialState: IPage = { itemsPerPage: 10, allItems: [] }
) {
    const { itemsPerPage, allItems } = initialState;
    const [items, setItems] = useState<IItem[] | undefined>(allItems);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(allItems?.length / itemsPerPage);
    const itemCount = items?.length || 0;
    const startIndex = currentPage * itemCount;

    const currentItems = items?.slice(startIndex, itemsPerPage);

    return { currentPage, setCurrentPage, currentItems, totalPages };
}

export const PageState = createContainer(usePage);

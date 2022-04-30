import { useMemo, useState } from 'react';
import { createContainer } from 'unstated-next';

interface IPage {
    itemsPerPage: number;
    allItems: IItem[];
}

export function usePage(
    initialState: IPage = { itemsPerPage: 10, allItems: [] }
) {
    const { itemsPerPage, allItems } = initialState;
    const [items] = useState<IItem[]>(allItems);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState<IItem[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    useMemo(() => {
        const itemsLength = items.length || 0;
        const totalPages = Math.ceil(itemsLength / itemsPerPage);
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Number(startIndex) + Number(itemsPerPage);
        const currentItems = items.slice(startIndex, endIndex);
        setCurrentItems(currentItems);
        setTotalPages(totalPages);
    }, [currentPage, items, itemsPerPage]);

    return { currentPage, setCurrentPage, currentItems, totalPages };
}

export const PageState = createContainer(usePage);

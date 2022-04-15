import React from 'react';
import { PageState } from '../state';

export function PageNav() {
    const { totalPages, setCurrentPage, currentPage } =
        PageState.useContainer();

    const pageList = [];
    for (let i = 1; i <= totalPages; i++) {
        pageList.push(<li>{i}</li>);
    }
    return <ul>{pageList}</ul>;
}

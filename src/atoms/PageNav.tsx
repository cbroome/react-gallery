import React from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

interface IPagedLink {
    isCurrentPage: boolean;
}

const PagedLink = styled.li<IPagedLink>`
    padding: 10px 5px;
    margin: 0 5px 0;
    cursor: pointer;
    ${(props) => props.isCurrentPage && 'border: 1px solid;'}
    :hover {
        background: #eee;
    }
`;

const PagedList = styled.ul`
    list-style: none;
    display: flex;
`;

export function PageNav() {
    const { totalPages, setCurrentPage, currentPage } =
        GalleryState.useContainer();

    const pageList = [];

    const selectPage = (pageNumber: number) => {
        return () => {
            setCurrentPage(pageNumber);
        };
    };

    // Only render if there's more than one page
    for (let i = 1; i <= totalPages; i++) {
        const isCurrentPage = i === currentPage;
        pageList.push(
            <PagedLink
                key={`page-link-${i}`}
                className="rg-paged-link"
                onClick={selectPage(i)}
                isCurrentPage={isCurrentPage}
            >
                {i}
            </PagedLink>
        );
    }
    return (
        <>
            {totalPages > 1 && (
                <PagedList className="rg-paged-list">{pageList}</PagedList>
            )}
        </>
    );
}

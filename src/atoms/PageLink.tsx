import React from 'react';
import styled from 'styled-components';
import { PageState } from '../state';

interface IPageLink {
    pageNumber: number;
}

interface ILinkElement {
    isCurrentPage: boolean;
}

const LinkElement = styled.li<ILinkElement>``;

export function PageLink({ pageNumber }: IPageLink) {
    const { currentPage } = PageState.useContainer();
    const isCurrentPage = pageNumber === currentPage;

    return <LinkElement isCurrentPage>{pageNumber}</LinkElement>;
}

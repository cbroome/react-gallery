import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

interface IOverlayNavView {
    children: ReactNode;
}

const Wrapper = styled.div`
    position: relative;
    max-width: 100%;
    display: grid;
    grid-template-columns: 10% max-content 15%;
    grid-template-rows: 1fr;
    gap: 0px 0px;
`;

const Underlay = styled.div`
    grid-area: 1 / 1 / 2 / 4;
`;

const NavColumn = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        background: rgba(255, 255, 255, 0.5);
    }
`;

const Control = styled.div`
    font-size: 2em;
    font-weight: bold;
`;

const NavColumnLeft = styled(NavColumn)`
    justify-content: left;
    grid-area: 1 / 1 / 2 / 2;
`;

const NavColumnRight = styled(NavColumn)`
    grid-area: 1 / 3 / 2 / 4;
    justify-content: right;
`;

export function OverlayNavView({ children }: IOverlayNavView) {
    const { nextItem, prevItem, onClickHandler } = GalleryState.useContainer();

    return (
        <Wrapper className="rg-overlay-nav-view">
            <Underlay className="rg-underlay">{children}</Underlay>

            {prevItem && (
                <NavColumnLeft
                    className="rg-nav-column rg-left"
                    onClick={onClickHandler(prevItem)}
                >
                    <Control>&lt;</Control>
                </NavColumnLeft>
            )}

            {nextItem && (
                <NavColumnRight
                    className="rg-nav-column rg-right"
                    onClick={onClickHandler(nextItem)}
                >
                    <Control>&gt;</Control>
                </NavColumnRight>
            )}
        </Wrapper>
    );
}

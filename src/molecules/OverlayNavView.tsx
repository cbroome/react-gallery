import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';
import { Arrow } from '../atoms';

interface IOverlayNavView {
    children: ReactNode;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10% 1fr 15%;
    grid-template-rows: 1fr;
    gap: 0px 0px;
`;

const Underlay = styled.div`
    grid-area: 1 / 1 / 2 / 4;
    margin: 0 auto;
`;

const NavColumn = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    opacity: 0.5;
`;

const Control = styled.div`
    font-size: 2em;
    font-weight: bold;
    margin: 20px;

    background: lightgrey;
    border-radius: 100%;
    padding: 10px;
`;

const NavColumnLeft = styled(NavColumn)`
    justify-content: left;
    grid-area: 1 / 1 / 2 / 2;

    :hover {
        opacity: 1;
        background: linear-gradient(
            270deg,
            rgba(234, 243, 242, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
    }
`;

const NavColumnRight = styled(NavColumn)`
    grid-area: 1 / 3 / 2 / 4;
    justify-content: right;

    :hover {
        opacity: 1;
        background: linear-gradient(
            90deg,
            rgba(234, 243, 242, 0) 0%,
            rgba(255, 255, 255, 1) 100%
        );
    }
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
                    <Control>
                        <Arrow rotation="left" />
                    </Control>
                </NavColumnLeft>
            )}

            {nextItem && (
                <NavColumnRight
                    className="rg-nav-column rg-right"
                    onClick={onClickHandler(nextItem)}
                >
                    <Control>
                        <Arrow rotation="right" />
                    </Control>
                </NavColumnRight>
            )}
        </Wrapper>
    );
}

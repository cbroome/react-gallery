import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

interface IOverlayNavView {
    children: ReactNode;
}

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
`;

const Underlay = styled.div`
    height: 100%;
    width: 100%;
`;

const NavColumn = styled.div`
    height: 100%;
    width: 12%;
    text-align: center;
    vertical-align: middle;
    position: relative;
`;

const Control = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2em;
`;

export function OverlayNavView({ children }: IOverlayNavView) {
    const { nextItem, prevItem, onClickHandler } = GalleryState.useContainer();

    return (
        <>
            <Overlay>
                {prevItem && (
                    <NavColumn>
                        <Control onClick={onClickHandler(prevItem)}>
                            &gt;
                        </Control>
                    </NavColumn>
                )}
                <Underlay>{children}</Underlay>
                {nextItem && (
                    <NavColumn>
                        <Control onClick={onClickHandler(nextItem)}>
                            &lt;
                        </Control>
                    </NavColumn>
                )}
            </Overlay>
        </>
    );
}

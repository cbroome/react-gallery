import React from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const CloseWrapper = styled.span`
    cursor: pointer;
`;

/**
 * A container with the ability to load the next and previous items,
 * as well as close.
 *
 * @param param0
 * @returns
 */
export function SimpleNavMenu() {
    const { nextItem, prevItem, onClickHandler, clearActiveItem } =
        GalleryState.useContainer();
    const close = () => {
        clearActiveItem();
    };

    return (
        <MenuWrapper className="rg-simple-nav-menu">
            <div>
                {prevItem && (
                    <div onClick={onClickHandler(prevItem)}>Previous</div>
                )}
            </div>
            <CloseWrapper onClick={close}>Close</CloseWrapper>
            <div>
                {nextItem && <div onClick={onClickHandler(nextItem)}>Next</div>}
            </div>
        </MenuWrapper>
    );
}

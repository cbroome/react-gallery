import React from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

interface ICloseableView {
    children: any;
}

const ItemWrapper = styled.div``;

const Return = styled.div`
    cursor: pointer;
`;

/**
 * Nests the content in a nav menu
 *
 * @param param0
 * @returns
 */
export function CloseableView({ children }: ICloseableView) {
    const { setActiveItem } = GalleryState.useContainer();
    return (
        <div className="rg-closeable-view">
            <Return
                onClick={() => {
                    setActiveItem(undefined);
                }}
            >
                <span className="rg-pointer">&laquo;</span>
                <span className="rg-return-text">Return to Gallery</span>
            </Return>
            <ItemWrapper className="rg-item-wrapper">{children}</ItemWrapper>
        </div>
    );
}

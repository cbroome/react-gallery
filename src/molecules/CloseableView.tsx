import React from 'react';
import styled from 'styled-components';
import { GalleryState } from '../state';

interface ICloseableView {
    /**
     * Text for the action to leave the preview and return to the
     * main gallery
     */
    returnText?: string;
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
export function CloseableView({
    returnText = 'Return to Gallery',
    children,
}: ICloseableView) {
    const { returnToGallery } = GalleryState.useContainer();
    return (
        <div className="rg-closeable-view">
            <Return
                onClick={() => {
                    console.log('clicked Return to Gallery');
                    returnToGallery();
                }}
            >
                <span className="rg-pointer">&laquo;</span>
                <span className="rg-return-text">{returnText}</span>
            </Return>
            <ItemWrapper className="rg-item-wrapper">{children}</ItemWrapper>
        </div>
    );
}

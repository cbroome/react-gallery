import React from 'react';
import styled from 'styled-components';
import { OverlayNavView, SimpleNavMenu } from '../atoms';

interface ICloseableView {
    children: any;
}

const ItemWrapper = styled.div``;

/**
 * Nests the content in a nav menu
 *
 * @param param0
 * @returns
 */
export function CloseableView({ children }: ICloseableView) {
    return (
        <div className="rg-closeable-view">
            <SimpleNavMenu />
            <OverlayNavView>
                <ItemWrapper className="rg-item-wrapper">
                    {children}
                </ItemWrapper>
            </OverlayNavView>
        </div>
    );
}

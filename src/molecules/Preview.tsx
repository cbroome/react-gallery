import React from 'react';
import styled from 'styled-components';
import { OverlayNavView } from './OverlayNavView';
import { Header1, Image, Video } from '../atoms';
import { GalleryState } from '../state';

const PreviewItem = styled.div`
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;

/**
 * Show a full-sized preview of the gallery item. This will
 * also show the title and description
 *
 * @param param0
 * @returns
 */
export function Preview() {
    const { activeItem, showItemNav } = GalleryState.useContainer();
    let url: string = '';
    let target: string = '_self';
    if (activeItem?.allowDirectLink) {
        url = activeItem.externalLink || activeItem.resourceUrl;
        // Open images in a new window
        target = '_blank';
    }

    const actualPreview =
        activeItem!!.type === 'image' ? <Image url={url} /> : <Video />;

    const preview = (
        <PreviewItem className="rg-preview-item">
            <a href={url} target={target}>
                {actualPreview}
            </a>
        </PreviewItem>
    );

    return (
        <div className="rg-preview">
            {activeItem && (
                <>
                    <Header1 className="rg-preview-header">
                        {activeItem!!.title}
                    </Header1>

                    {showItemNav && <OverlayNavView>{preview}</OverlayNavView>}

                    {!showItemNav && preview}

                    <div className="rg-preview-description">
                        {activeItem!!.description}
                    </div>
                </>
            )}
        </div>
    );
}

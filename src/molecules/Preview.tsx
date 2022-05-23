import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { OverlayNavView } from './OverlayNavView';
import { Header1, Image, Video } from '../atoms';
import { GalleryState } from '../state';
import { IItemImage, IItemVideo } from '../types';

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
    let preview: ReactNode;
    if (activeItem!!.type === 'image') {
        const imageItem = activeItem!! as IItemImage;
        if (imageItem?.allowDirectLink) {
            url = imageItem.externalLink || imageItem?.resourceUrl;
            // Open images in a new window
            target = '_blank';
        }

        preview = (
            <PreviewItem className="rg-preview-item">
                <a href={url} target={target}>
                    <Image url={url} />
                </a>
            </PreviewItem>
        );
    } else {
        const videoItem = activeItem!! as IItemVideo;

        preview = (
            <PreviewItem className="rg-preview-item">
                <Video
                    sources={videoItem!!.sources}
                    autoplay={videoItem.autoplay || false}
                    controls={videoItem.controls || true}
                />
            </PreviewItem>
        );
    }

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

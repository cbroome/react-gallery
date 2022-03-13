import React from 'react';
import { Header1, Image, Video } from '../atoms';
import { GalleryState } from '../state';

/**
 * Show a full-sized preview of the gallery item. This will
 * also show the title and description
 *
 * @param param0
 * @returns
 */
export function Preview() {
    const { activeItem } = GalleryState.useContainer();
    let url: string = '';
    let target: string = '_self';
    if (activeItem?.allowDirectLink) {
        url = activeItem.externalLink || activeItem.resourceUrl;
        // Open images in a new window
        target = '_blank';
    }

    const actualPreview =
        activeItem!!.type === 'image' ? <Image url={url} /> : <Video />;

    return (
        <div className="rg-preview">
            {activeItem && (
                <>
                    <Header1>{activeItem!!.title}</Header1>
                    <a href={url} target={target}>
                        {actualPreview}
                    </a>
                    <div>{activeItem!!.description}</div>
                </>
            )}
        </div>
    );
}

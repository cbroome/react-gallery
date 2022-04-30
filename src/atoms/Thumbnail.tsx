import React from 'react';
import styled from 'styled-components';
import { Image } from './Image';

interface IThumbnail {
    url: string;
    height: number;
    width: number;
    altText?: string;
    onClick?: Function;
}

interface IThumbnailWrapper {
    height?: number;
    width?: number;
}

const ThumbnailWrapper = styled.div<IThumbnailWrapper>`
    height: ${(props) => props.height || '100%'};
    width: ${(props) => props.width || '100%'};
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        margin: 0 auto 0 auto;
        object-fit: contain;
    }
`;

/**
 * Generic wrapper for a Thumbnail component
 *
 * @param param0
 * @returns
 */
export function Thumbnail({ url, altText, onClick }: IThumbnail) {
    const thumbnailClick = () => {
        onClick && onClick();
    };

    return (
        <ThumbnailWrapper className="rg-thumbnail" onClick={thumbnailClick}>
            <Image url={url} altText={altText} />
        </ThumbnailWrapper>
    );
}

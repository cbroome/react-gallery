import React from 'react';
import { IVideoSource } from '../types';

interface IIVideoInput {
    controls: boolean;
    autoplay: boolean;
    sources: IVideoSource[];
    width?: number | string;
}

export function Video({
    controls = true,
    autoplay = false,
    sources,
    width,
}: IIVideoInput) {
    return (
        <video controls={controls} autoPlay={autoplay} width={width}>
            {sources.map((source) => {
                return <source src={source.src} type={source.type} />;
            })}
            Sorry, your browser doesn't support embedded videos.
        </video>
    );
}

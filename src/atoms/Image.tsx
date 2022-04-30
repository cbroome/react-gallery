import React from 'react';

interface IImage {
    url: string;
    altText?: string;
}

export function Image({ url, altText }: IImage) {
    return (
        <>
            <img src={url} alt={altText} />
        </>
    );
}

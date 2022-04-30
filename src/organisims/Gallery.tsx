import React from 'react';
import styled from 'styled-components';
import { isEmpty } from 'lodash';
import { GridLayout } from '../molecules';
import { GalleryState } from '../state/GalleryState';

const GalleryWrapper = styled.div``;

export function Gallery({
    items,
    selectedId,
    returnToGalleryCallback,
    showItemNav = true,
}: IGallery) {
    if (isEmpty(items)) {
        console.error('Pass in a populated array for the Gallery component');
        throw Error('Error! trying to initialize React Gallery without items');
    }

    const statePackage = {
        items,
        selectedId,
        returnToGalleryCallback,
        showItemNav,
    };

    return (
        <>
            <GalleryState.Provider initialState={statePackage}>
                <GalleryWrapper className="react-gallery-wrapper">
                    <GridLayout items={items} />
                </GalleryWrapper>
            </GalleryState.Provider>
        </>
    );
}

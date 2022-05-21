import React from 'react';
import { IItem } from '../types';

interface IFullView {
    item: IItem;
    clickThroughLink?: string;
}

export function FullView({ item, clickThroughLink }: IFullView) {
    if (item.type == 'image') {
    }
    return <>Full View!</>;
}

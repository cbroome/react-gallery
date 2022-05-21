import { ReactNode } from 'react';

export type FreeformField = string | ReactNode;

export interface IThumbnail {
    url: string;
    height: number;
    width: number;
    altText?: string;
    onClick?: Function;
}

export interface IItem {
    /**
     * unique string for Item id
     */
    id: string;

    /**
     * location of the thumbnail for this Item
     */
    thumbnail?: IThumbnail;

    /**
     * number representing the sort order
     */
    order?: number;

    /**
     *
     */
    createdDate?: Date;

    /**
     * Text for alt tags
     */
    alt?: string;

    /**
     * description for display along with the highlighted Item
     */
    description?: FreeformField;

    /**
     * whether the Item links to the original file
     */
    allowDirectLink?: boolean;

    type: 'image' | 'video';

    /**
     * Will be displayed alongside a highlighted Item
     */
    title: string;

    /**
     * Allows the clicking of a highlighted item to navigate to this url
     */
    externalLink: string;

    /**
     * Called when an item is highlighted. It will also be called if the gallery
     * is initialized with a selectedId
     */
    callback?: Function;
}

export type TVideoType =
    | 'video/webm'
    | 'video/mp4'
    | 'video/avi'
    | 'video/quicktime';

export interface IVideoSource {
    src: string;
    type: TVideoType;
}

export interface IItemImage extends IItem {
    /**
     * The url of the Item
     */
    resourceUrl: string;
}

export interface IItemVideo extends IItem {
    controls?: boolean;
    autoplay?: boolean;
    sources: IVideoSource[];
    width: string | number;
}

export type TItemUnioned = IItemImage | IItemVideo;

export interface IGallery {
    items: TItemUnioned[];
    sortOrder: 'asc' | 'desc';
    selectedId?: string;
    returnToGalleryCallback?: Function;
    showItemNav: boolean;
    usePaging: boolean;
    itemsPerPage?: number;
    changePageCallback?: Function;
}

export type TypeReactOnClick = undefined | ((event: React.MouseEvent) => void);

interface IItem {
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
    description?: string;

    /**
     * whether the Item links to the original file
     */
    allowDirectLink?: boolean;

    type: 'image' | 'video';

    /**
     * The url of the Item
     */
    resourceUrl: string;

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

interface IGallery {
    items: IItem[];
    sortOrder: 'asc' | 'desc';
    selectedId?: string;
    returnToGalleryCallback?: function;
    showItemNav: boolean;
    usePaging: boolean;
    itemsPerPage?: number;
    changePageCallback?: function;
}

type TypeReactOnClick = undefined | ((event: React.MouseEvent) => void);

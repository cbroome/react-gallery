interface IItem {
  thumbnail?: IThumbnail;
  order?: number;
  createdDate?: Date;
  alt?: string;
  description?: string;
  allowDirectLink?: boolean;
  type: "image" | "video";
  resourceUrl: string;
  title: string;
  externalLink: string;
  callback?: Function;
}

interface IGallery {
  items: IItem[];
}

type TypeReactOnClick = undefined | ((event: React.MouseEvent) => void);

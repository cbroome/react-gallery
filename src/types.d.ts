interface IThumbnail {
  url: string;
}

interface IItem {
  thumbnail?: IThumbnail;
  order?: number;
  createdDate?: Date;
  alt?: string;
  description?: string;
  allowDirectLink?: boolean;
}

interface IVideo extends IItem {
  url: string;
}

interface IImage extends IItem {
  url: string;
}

interface IGallery {
  items: (IVideo | IImage)[];
}

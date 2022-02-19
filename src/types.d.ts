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
  type: "image" | "video";
  url: string;
  title: string;
}

interface IGallery {
  items: IItem[];
}

export interface INewsItem {
  id: number;
  title: string;
  extra: string;
  link: string;
}

export interface INews {
  id: number;
  name: string;
  icon_color: string;
  data: INewsItem[];
}

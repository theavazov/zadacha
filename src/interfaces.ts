export interface IPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IPostObject {
  data: IPost[];
  numbers: number[];
}

export interface IPostsContext {
  postObject: IPostObject;
  isLoading: boolean;
  page: number;
  setPage: (page: number) => void;
  setVariant: (variant: "original" | "alphabetical") => void;
}

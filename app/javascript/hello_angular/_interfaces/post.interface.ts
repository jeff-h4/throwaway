export interface Post {
  readonly id?: number;
  title: string;
}

export interface PostArray {
  [index: number] : Post;
}
export type UserType = {
  id: number;
  name: string;
};

export type CommentType = {
  comment: string
  date: string
  id: number
  rating: number
  user: UserType
};

export type Comments = CommentType[];

export type CommentData = {
  comment: string
  rating: number
}

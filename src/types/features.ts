export interface IReviews {
  name?: string;
  email?: string;
  message?: string;
}
export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  publisherEmail: string;
  imgUrl: string;
  reviews: IReviews[];
  userId?: string;
}

export interface BookState {
  books: IBook[];
}

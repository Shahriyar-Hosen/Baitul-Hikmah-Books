export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: IReview[];
  imageUrl: string;
  userEmail: string;
}

export interface IReview {
  userEmail: string;
  review: string;
}

export interface IWishlist {
  email: string;
  books: IBook[];
}

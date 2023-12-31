export type IGenre =
  | "Self-Help"
  | "Fantasy"
  | "Fiction"
  | "Non-Fiction"
  | "Religion"
  | "Novel"
  | "Academic"
  | "Classic"
  | "Sci-Fi";

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: IGenre;
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
export type ISortBy = "genre" | "publicationDate" | "createdAt";
export type ISortOrder = 1 | -1;
export interface IFilterOptions {
  page?: number;
  limit?: number;
  sortBy?: ISortBy;
  sortOrder?: ISortOrder;
  searchTerm?: string;
  genre?: IGenre | "";
  publicationDate?: string;
}

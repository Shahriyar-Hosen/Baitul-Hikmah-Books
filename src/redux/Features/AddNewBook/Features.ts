import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  id?: string;
}

interface BookState {
  books: IBook[];
}

const initialState: BookState = {
  books: [],
};

const AddNewBookSlice = createSlice({
  name: "addNewBook",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<IBook>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = AddNewBookSlice.actions;
export default AddNewBookSlice.reducer;

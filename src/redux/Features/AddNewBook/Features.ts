import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookState, IBook } from "../../../types";

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

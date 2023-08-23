import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/interface";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface BookState {
  total: number;
  books: IBook[];
}

const initialState: BookState = {
  total: 0,
  books: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export const {} = bookSlice.actions;
export default bookSlice.reducer;

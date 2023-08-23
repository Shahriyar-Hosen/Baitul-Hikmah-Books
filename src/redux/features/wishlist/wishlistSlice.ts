import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/interface";

interface WishlistState {
  total: number;
  books: IBook[];
}

const initialState: WishlistState = {
  total: 0,
  books: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, actions: PayloadAction<IBook>) => {
      const exist = state.books.find(
        (book) => book._id === actions.payload._id
      );

      if (!exist) {
        state.books.push(actions.payload);
        state.total += 1;
      }
    },
    removeFromWishlist: (state, actions: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== actions.payload._id
      );
      state.total -= 1;
    },
    setWishlist: (state, actions: PayloadAction<IBook[]>) => {
      state.books = actions.payload;
      state.total = actions.payload.length;
    },
  },
});

export const { addToWishlist, removeFromWishlist, setWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;

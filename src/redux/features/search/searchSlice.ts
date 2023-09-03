import { createSlice } from "@reduxjs/toolkit";
import { IGenre, ISortBy, ISortOrder } from "../../../types/interface";

interface SearchState {
  keyword: string;
  filterOptions: {
    genre: IGenre | "";
    sortBy: ISortBy;
    sortOrder: ISortOrder;
  };
}

const initialState: SearchState = {
  keyword: "",
  filterOptions: {
    genre: "",
    sortBy: "createdAt",
    sortOrder: -1,
  },
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.keyword = action.payload;
    },
    filter: (state, action) => {
      state.filterOptions.genre = action.payload;
    },
    sortBy: (state, action) => {
      state.filterOptions.sortBy = action.payload;
    },
    sortOrder: (state, action) => {
      state.filterOptions.sortOrder = action.payload;
    },
    clearFilter: (state) => {
      state.keyword = "";
      state.filterOptions.genre = "";
    },
  },
});

export const { search, filter, clearFilter, sortBy, sortOrder } =
  searchSlice.actions;
export default searchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { IGenre } from "../../../types/interface";

interface SearchState {
  keyword: string;
  filterOptions: {
    genre: IGenre | "";
  };
}

const initialState: SearchState = {
  keyword: "",
  filterOptions: {
    genre: "",
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
    clearFilter: (state) => {
      state.keyword = "";
      state.filterOptions.genre = "";
    },
  },
});

export const { search, filter, clearFilter } = searchSlice.actions;
export default searchSlice.reducer;

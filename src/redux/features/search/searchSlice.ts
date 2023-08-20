import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  keyword: string;
  filterOptions: string[];
}

const initialState: SearchState = {
  keyword: "",
  filterOptions: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.keyword = action.payload;
    },
    filter: (state, action) => {
      state.filterOptions = action.payload;
    },
    clearFilter: (state) => {
      state.keyword = ""
      state.filterOptions = []
    },
  },
});

export const { search, filter, clearFilter } = searchSlice.actions;
export default searchSlice.reducer;

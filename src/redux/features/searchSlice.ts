import { createSlice } from '@reduxjs/toolkit';
interface IBook {
  searchTerm: string;
  genre: string;
  publicationYear: string;
}

const initialState: IBook = {
  searchTerm: '',
  genre: '',
  publicationYear: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTermValue: (state, action) => {
      state.searchTerm = action.payload;
    },
    setGenreValue: (state, action) => {
      state.genre = action.payload;
    },
    setPublicationYear: (state, action) => {
      state.publicationYear = action.payload;
    },
  },
});

export const { setSearchTermValue, setGenreValue, setPublicationYear } =
  searchSlice.actions;

export default searchSlice.reducer;

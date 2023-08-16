import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: {
    title: '',
    author: '',
    publication: '',
    userEmail: '',
    imageUrl: '',
    genre: '',
    _id: '',
  },
};

const bookSlice = createSlice({
  name: 'updateBook',
  initialState,
  reducers: {
    updateBook: (state, action) => {
      state.book = { ...action.payload };
    },
  },
});

export const { updateBook } = bookSlice.actions;

export default bookSlice.reducer;

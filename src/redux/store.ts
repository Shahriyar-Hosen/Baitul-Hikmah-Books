import { configureStore } from "@reduxjs/toolkit";
import AddBookReducer from "./Features/AddNewBook/Features";
import { api } from "./Features/Api/apiSlice";
const store = configureStore({
  reducer: {
    addBook: AddBookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

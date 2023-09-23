import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../Feature/apiSlice";
import ModalSlice from "../Feature/ModalSlice";

const store = configureStore({
  reducer: {
    ModalSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;

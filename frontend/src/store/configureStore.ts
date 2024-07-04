import { configureStore, Tuple } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

export const store = configureStore({
  reducer,
  middleware: () => new Tuple(api),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

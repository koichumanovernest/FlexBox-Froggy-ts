// store.ts
import { configureStore } from "@reduxjs/toolkit";
import froggyReducer from "./levelSlice/froggySlice";

const store = configureStore({
  reducer: {
    froggy: froggyReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

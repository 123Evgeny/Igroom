import { configureStore } from "@reduxjs/toolkit";
import { tabReducer } from "./tabSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

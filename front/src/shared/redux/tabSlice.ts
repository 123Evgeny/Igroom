import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TabKey = "home" | "message" | "globe" | "bell" | "user";

const tabNames: Record<TabKey, string> = {
  home: "Главная",
  message: "Сообщения",
  globe: "Друзья в Интернете",
  bell: "Звонки",
  user: "Профиль",
};

interface TabState {
  key: TabKey;
  name: string;
}

const initialState: TabState = {
  key: "user",
  name: tabNames["user"],
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<TabKey>) => {
      state.key = action.payload;
      state.name = tabNames[action.payload];
    },
  },
});

export const { setTab } = tabSlice.actions;
export const tabReducer = tabSlice.reducer;
export const getTabName = (key: TabKey) => tabNames[key];

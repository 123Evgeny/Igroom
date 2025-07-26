import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile } from "../../entities/profile/model/types";

interface ProfileState {
  data: Profile | null;
}

const initialState: ProfileState = { data: null };

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<Profile>) {
      state.data = action.payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SeasonState {
  season?: string;
}

const initialState: SeasonState = {
  season: undefined,
};

export const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    setSeason: (state, action: PayloadAction<SeasonState>) => {
      state.season = action.payload.season;
    },
  },
});

export const { setSeason } = seasonSlice.actions;

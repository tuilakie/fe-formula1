import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { baseApi } from "./api/baseApi";
import { seasonApi } from "./api/seasonApi";
import { seasonSlice } from "./features/seasonSlice";
import { rankingRacesApi } from "./api/ranking.races.api";
import { rankingDriversApi } from "./api/ranking.drivers.api";
import { rankingTeamsApi } from "./api/ranking.teams.api";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [seasonApi.reducerPath]: seasonApi.reducer,
    [rankingRacesApi.reducerPath]: rankingRacesApi.reducer,
    [rankingDriversApi.reducerPath]: rankingDriversApi.reducer,
    [rankingTeamsApi.reducerPath]: rankingTeamsApi.reducer,
    seasonState: seasonSlice.reducer,
  },
  //   devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      baseApi.middleware,
      seasonApi.middleware,
      rankingRacesApi.middleware,
      rankingDriversApi.middleware,
      rankingTeamsApi.middleware,
    ]),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

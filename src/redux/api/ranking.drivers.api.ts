import { baseApi } from "./baseApi";
import { HttpResponse, RankingDriverDetail, RankingDriver } from "./type.api";

export const rankingDriversApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankingDrivers: builder.query<HttpResponse<RankingDriver[]>, string>({
      query: (season) => ({
        url: `ranking/${season}/driver`,
        method: "GET",
      }),
    }),
    getRankingDriverDetails: builder.query<
      HttpResponse<RankingDriverDetail[]>,
      { season?: string; driverName?: string }
    >({
      query: ({ season, driverName }) => ({
        url: `ranking/${season}/driver/${driverName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRankingDriversQuery, useGetRankingDriverDetailsQuery } =
  rankingDriversApi;

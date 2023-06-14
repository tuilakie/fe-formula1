import { baseApi } from "./baseApi";
import { HttpResponse, RankingRaceDetail, RankingRaces } from "./type.api";

export const rankingRacesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankingRaces: builder.query<HttpResponse<RankingRaces[]>, string>({
      query: (season) => ({
        url: `ranking/${season}/races`,
        method: "GET",
      }),
    }),
    getRankingDetails: builder.query<
      HttpResponse<RankingRaceDetail>,
      { season?: string; grandPrix?: string }
    >({
      query: ({ season, grandPrix }) => ({
        url: `ranking/${season}/races/${grandPrix}`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetRankingRacesQuery, useGetRankingDetailsQuery } =
  rankingRacesApi;

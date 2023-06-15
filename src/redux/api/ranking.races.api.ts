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
      transformResponse: (response: HttpResponse<RankingRaceDetail>) => {
        const { data } = response;
        const { rank } = data;
        const rankSorted = rank?.sort((a, b) => {
          return parseInt(a.position) - parseInt(b.position);
        });
        return {
          ...response,
          data: {
            ...data,
            rank: rankSorted,
          },
        };
      },
    }),
  }),
});

export const { useGetRankingRacesQuery, useGetRankingDetailsQuery } =
  rankingRacesApi;

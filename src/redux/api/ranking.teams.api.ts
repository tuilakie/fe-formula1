import { baseApi } from "./baseApi";
import { HttpResponse, RankingTeam, RankingTeamDetail } from "./type.api";

export const rankingTeamsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankingTeams: builder.query<HttpResponse<RankingTeam[]>, string>({
      query: (season) => ({
        url: `ranking/${season}/team`,
        method: "GET",
      }),
    }),
    getRankingTeamDetails: builder.query<
      HttpResponse<RankingTeamDetail[]>,
      {
        season?: string;
        teamName?: string;
      }
    >({
      query: ({ season, teamName }) => ({
        url: `ranking/${season}/team/${teamName}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRankingTeamsQuery, useGetRankingTeamDetailsQuery } =
  rankingTeamsApi;

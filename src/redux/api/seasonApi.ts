import { baseApi } from "./baseApi";
import { HttpResponse, Season } from "./type.api";

export const seasonApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSeasons: builder.query<HttpResponse<Season[]>, void>({
      query: () => ({
        url: `seasons`,
        method: "GET",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetSeasonsQuery } = seasonApi;

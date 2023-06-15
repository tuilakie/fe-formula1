import { RankingDriver } from "./type.api.d";
export interface HttpResponse<T> {
  success: boolean;
  data: T;
  message: string;
  meta?: Meta;
}

export interface Meta {
  total: number;
  pages: number;
  current: number;
  size: number;
}

export type Season = {
  name: string;
};

export type RankingRaces = {
  position: string;
  grandPrix: string;
  points: number;
  laps: string;
  time: string;
  date: Date;
  circuit: string;
  driver: string;
  team: string;
};

export type RankingRaceDetail = {
  grandPrix: string;
  date: Date;
  circuit: string;
  title: string;
  rank?: Omit<RankingRaces, "grandPrix" | "date" | "circuit">[];
};

export type RankingDriver = {
  position: string;
  name: string;
  team: string;
  points: number;
  nationality: string;
};

export type RankingDriverDetail = {
  grandPrix: string;
  date: Date;
  team: string;
  position: string;
  points: number;
  laps: string;
  time: string;
};

export type RankingTeam = {
  name: string;
  points: number;
};

export type RankingTeamDetail = {
  grandPrix: string;
  date: Date;
  team: string;
  points: number;
};

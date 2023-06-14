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

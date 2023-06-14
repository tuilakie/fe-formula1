import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import {
  useGetRankingDetailsQuery,
  useGetRankingRacesQuery,
} from "../../redux/api/ranking.races.api";
import { RankingRaces } from "../../redux/api/type.api";
import { useParams } from "react-router-dom";

const columns: ColumnsType<
  Omit<RankingRaces, "grandPrix" | "date" | "circuit">
> = [
  {
    title: "Pos",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Driver",
    dataIndex: "driver",
    key: "driver",
  },
  {
    title: "Car",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Laps",
    dataIndex: "laps",
    key: "laps",
  },
  {
    title: "Time/Retired",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
];

const RankingRacesPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { grandPrix } = useParams<{ grandPrix: string }>();
  const { data, isLoading, isFetching } = useGetRankingDetailsQuery({
    season,
    grandPrix,
  });
  return (
    <Table
      columns={columns}
      pagination={false}
      rowKey={(record) => record.position}
      dataSource={data?.data.rank || []}
      loading={isFetching || isLoading}
    />
  );
};

export default RankingRacesPage;

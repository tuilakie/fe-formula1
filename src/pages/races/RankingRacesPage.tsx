import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { useGetRankingRacesQuery } from "../../redux/api/ranking.races.api";
import { RankingRaces } from "../../redux/api/type.api";
import { Link } from "react-router-dom";

const columns: ColumnsType<RankingRaces> = [
  {
    title: "Grand Prix",
    dataIndex: "grandPrix",
    key: "grandPrix",
    render: (grandPrix: string) => {
      return (
        <Link
          to={`/races/${grandPrix.toLocaleLowerCase()}`}
          style={{
            cursor: "pointer",
            color: "#1890ff",
            textDecoration: "underline",
            fontWeight: "semibold",
            fontSize: "1rem",
          }}
        >
          {grandPrix}
        </Link>
      );
    },
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date: string) => {
      return new Date(date).toDateString();
    },
  },
  {
    title: "Winner",
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
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
];

const RankingRacesPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { data, isLoading, isFetching } = useGetRankingRacesQuery(season || "");
  return (
    <Table
      columns={columns}
      pagination={false}
      rowKey={(record) => record.grandPrix}
      dataSource={data?.data || []}
      loading={isFetching || isLoading}
    />
  );
};

export default RankingRacesPage;

import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";
import { RankingTeam } from "../../redux/api/type.api";
import { useGetRankingTeamsQuery } from "../../redux/api/ranking.teams.api";

const columns: ColumnsType<RankingTeam> = [
  {
    title: "POS",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Team",
    dataIndex: "name",
    key: "name",
    render: (name: string) => {
      return (
        <Link
          to={`/teams/${name.toLocaleLowerCase().replace(" ", "-")}`}
          style={{
            cursor: "pointer",
            color: "#1890ff",
            textDecoration: "underline",
            fontWeight: "semibold",
            fontSize: "1rem",
          }}
        >
          {name}
        </Link>
      );
    },
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
];

const RankingTeamPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { data, isLoading, isFetching } = useGetRankingTeamsQuery(season || "");
  const dataSources = data?.data.map((team, index) => {
    return {
      position: index + 1,
      name: team.name,
      points: team.points,
    };
  });

  console.log(dataSources);

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSources}
        loading={isLoading || isFetching}
        pagination={false}
      />
    </>
  );
};

export default RankingTeamPage;

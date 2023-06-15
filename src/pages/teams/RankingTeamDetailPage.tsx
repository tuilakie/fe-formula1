import React from "react";
import { Button, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { RankingTeamDetail } from "../../redux/api/type.api";
import { useGetRankingTeamDetailsQuery } from "../../redux/api/ranking.teams.api";

const columns: ColumnsType<RankingTeamDetail> = [
  {
    title: "Grand Prix",
    dataIndex: "grandPrix",
    key: "grandPrix",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date) => {
      return new Date(date).toDateString();
    },
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
];

const RankingTeamDetailPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { teamName } = useParams<{ teamName: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetRankingTeamDetailsQuery({
    season,
    teamName: teamName?.replace("-", " "),
  });

  return (
    <>
      <Button
        onClick={() => {
          navigate("/teams");
        }}
        icon={<AiOutlineRollback />}
        style={{ marginBottom: "1rem" }}
      >
        Back
      </Button>
      <Typography.Title level={2} style={{ marginBottom: 12 }}>
        {`${season} Constructor Standings: ${teamName?.replace(
          "-",
          " "
        )}`.toUpperCase()}
      </Typography.Title>
      <Table
        columns={columns}
        dataSource={data?.data}
        loading={isLoading || isFetching}
        pagination={false}
      />
    </>
  );
};

export default RankingTeamDetailPage;

import React from "react";
import { Button, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import { RankingDriverDetail } from "../../redux/api/type.api";
import { useGetRankingDriverDetailsQuery } from "../../redux/api/ranking.drivers.api";

const columns: ColumnsType<RankingDriverDetail> = [
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
    title: "Car",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Race Position",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
];

const RankingDriverDetailPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { driverName } = useParams<{ driverName: string }>();
  const navigate = useNavigate();
  const { data, isLoading, isFetching } = useGetRankingDriverDetailsQuery({
    season,
    driverName: driverName?.replace("-", " "),
  });

  return (
    <>
      <Button
        onClick={() => {
          navigate("/drivers");
        }}
        icon={<AiOutlineRollback />}
        style={{ marginBottom: "1rem" }}
      >
        Back
      </Button>
      <Typography.Title level={2} style={{ marginBottom: 12 }}>
        {season &&
          driverName &&
          `${season} Driver Standings: ${driverName.replace(
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

export default RankingDriverDetailPage;

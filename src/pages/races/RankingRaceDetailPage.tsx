import React from "react";
import { Button, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { useGetRankingDetailsQuery } from "../../redux/api/ranking.races.api";
import { RankingRaces } from "../../redux/api/type.api";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

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
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => {
          navigate("/races");
        }}
        icon={<AiOutlineRollback />}
      >
        Back
      </Button>
      {data && data.data.rank && (
        <Space size={"large"} direction="vertical" style={{ width: "100%" }}>
          <Typography.Title level={2}>{data.data.title}</Typography.Title>
          <Typography.Text strong style={{ fontSize: "1rem" }}>
            {new Date(data.data.date || "").toDateString()}
            {" - "}
            <Typography.Text type="secondary" style={{ fontSize: "1.2rem" }}>
              {data.data.circuit}
            </Typography.Text>
          </Typography.Text>
          <Table
            columns={columns}
            pagination={false}
            rowKey={(record) => record.driver}
            dataSource={data.data.rank}
            loading={isFetching || isLoading}
          />
        </Space>
      )}
    </>
  );
};

export default RankingRacesPage;

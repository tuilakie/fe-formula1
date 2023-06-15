import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useAppSelector } from "../../redux/hook";
import { Link } from "react-router-dom";
import { RankingDriver } from "../../redux/api/type.api";
import { useGetRankingDriversQuery } from "../../redux/api/ranking.drivers.api";

const columns: ColumnsType<RankingDriver> = [
  {
    title: "POS",
    dataIndex: "position",
    key: "position",
  },
  {
    title: "Driver",
    dataIndex: "name",
    key: "name",
    render: (name: string) => {
      return (
        <Link
          to={`/drivers/${name.toLocaleLowerCase().replace(" ", "-")}`}
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
    title: "Nationality",
    dataIndex: "nationality",
    key: "nationality",
  },
  {
    title: "Car",
    dataIndex: "team",
    key: "team",
  },
  {
    title: "Points",
    dataIndex: "points",
    key: "points",
  },
];

const RankingDriverPage: React.FC = () => {
  const season = useAppSelector((state) => state.seasonState.season);
  const { data, isLoading, isFetching } = useGetRankingDriversQuery(
    season || ""
  );

  return (
    <>
      <Table
        columns={columns}
        dataSource={data?.data}
        loading={isLoading || isFetching}
        pagination={false}
      />
    </>
  );
};

export default RankingDriverPage;

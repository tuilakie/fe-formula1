import { Link, Outlet, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaCarCrash } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import { RiTeamFill } from "react-icons/ri";
import type { MenuProps } from "antd";
import { Layout, Menu, Select, Space, Typography } from "antd";
import { Toaster } from "react-hot-toast";
import { useGetSeasonsQuery } from "../../redux/api/seasonApi";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { setSeason } from "../../redux/features/seasonSlice";

const { Content, Sider, Header } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="/races">RACES</Link>, "/races", <FaCarCrash />),
  getItem(<Link to="/drivers">DRIVERS</Link>, "/drivers", <RxPerson />),
  getItem(<Link to="/teams">TEAMS</Link>, "/teams", <RiTeamFill />),
];

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { data, isLoading, isFetching } = useGetSeasonsQuery();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setSeason({ season: data.data[0].name }));
    }
  }, [data, dispatch]);
  const season = useAppSelector((state) => state.seasonState.season);

  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          theme="light"
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            selectedKeys={[location.pathname]}
          />
        </Sider>
        <Layout>
          <Toaster />
          <Header
            style={{
              background: "#fff",
              boxShadow: "0 1px 4px rgba(0,21,41,.08)",
            }}
          >
            <Space
              direction="horizontal"
              style={{ width: "100%", textAlign: "center" }}
              size={"large"}
            >
              <Typography.Title level={3} style={{ margin: 0 }}>
                SELECT THE SEASON
              </Typography.Title>
              <Select
                size="large"
                style={{ width: 120 }}
                options={data?.data.map((item) => ({
                  label: item.name,
                  value: item.name,
                }))}
                loading={isLoading || isFetching}
                value={season}
                onChange={(value) => {
                  dispatch(setSeason({ season: value }));
                }}
              ></Select>
            </Space>
          </Header>
          <Content style={{ margin: "16px 32px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RootLayout;

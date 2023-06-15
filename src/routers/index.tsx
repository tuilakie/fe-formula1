import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import { Typography } from "antd";
import RankingRacesPage from "../pages/races/RankingRacesPage";
import RankingRaceDetailPage from "../pages/races/RankingRaceDetailPage";
import RankingDriverPage from "../pages/drivers/RankingDriverPage";
import RankingDriverDetailPage from "../pages/drivers/RankingDriverDetailPage";
import RankingTeamPage from "../pages/teams/RankingTeamPage";
import RankingTeamDetailPage from "../pages/teams/RankingTeamDetailPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/races",
        element: <RankingRacesPage />,
      },
      {
        path: "races/:grandPrix",
        element: <RankingRaceDetailPage />,
      },
      {
        path: "/drivers",
        element: <RankingDriverPage />,
      },
      {
        path: "/drivers/:driverName",
        element: <RankingDriverDetailPage />,
      },
      {
        path: "/teams",
        element: <RankingTeamPage />,
      },
      {
        path: "/teams/:teamName",
        element: <RankingTeamDetailPage />,
      },
      {
        path: "/",
        element: (
          <Typography.Title>Welcome to the Formula 1 Database</Typography.Title>
        ),
      },
    ],
  },
]);

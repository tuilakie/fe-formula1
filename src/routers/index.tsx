import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import { Typography } from "antd";
import RankingRacesPage from "../pages/races/RankingRacesPage";
import RankingRaceDetailPage from "../pages/races/RankingRaceDetailPage";

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
        element: <div>Drivers</div>,
      },
      {
        path: "/teams",
        element: <div>Teams</div>,
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

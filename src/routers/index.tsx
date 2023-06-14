import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import { Typography } from "antd";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/races",
        element: <div>Races</div>,
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

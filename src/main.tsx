import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { persistor, store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <RouterProvider router={router} />

    {/* </Provider> */}
  </React.StrictMode>
);

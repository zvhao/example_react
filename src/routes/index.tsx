import { createBrowserRouter } from "react-router-dom";
import Main from "~/layouts/Main";
import { ErrorPage, Home, AddUser } from "~/pages";

import { Paths } from "./navbar";

const router = createBrowserRouter([
  {
    path: Paths.Home,
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: Paths.AddUser,
        element: <AddUser />,
      },
    ],
  },
]);

export default router;

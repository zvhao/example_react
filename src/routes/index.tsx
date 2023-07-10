import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loadable from "~/components/Loadable";
import Main from "~/layouts/Main";
import { ErrorPage } from "~/pages";
import { Paths } from "~/types";

const Home = Loadable(lazy(() => import("~/pages/Home")));
const AddUser = Loadable(lazy(() => import("~/pages/AddUser")));
const Login = Loadable(lazy(() => import("~/pages/LoginV2")));

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
  {
    path: Paths.Login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

export default router;

import { AuthLayoutRoutes, MainLayoutRoutes } from "./routesTypes";

import AuthLayout from "../layouts/AuthLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import MainLayout from "../layouts/MainLayout";

export const HOME_PATH = '/';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {path: HOME_PATH, Component: Home},
  ]
}

export const LOGIN_PATH = '/';

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    {path: LOGIN_PATH, Component: Login}
  ]
}
import Home from "../pages/home/Home";
import MainLayout from "../pages/MainLayout";
import { MainLayoutRoutes } from "./routesTypes";

export const HOME_PATH = '/';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    {path: HOME_PATH, Component: Home},
  ]
}
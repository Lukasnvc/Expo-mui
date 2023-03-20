import { AuthLayoutRoutes, MainLayoutRoutes } from "./routesTypes";

import AuthLayout from "../layouts/AuthLayout";
import Card from "../pages/card/Card";
import Home from "../pages/home/Home";
import ImagePage from "../pages/imagePage/ImagePage";
import Login from "../pages/login/Login";
import MainLayout from "../layouts/MainLayout";
import Register from "../pages/register/Register";
import VideosPage from "../pages/videosPage/VideosPage";

export const HOME_PATH = '/';
export const IMAGES_PAGE_PATH = '/images';
export const VIDEOS_PAGE_PATH = '/videos';
export const CARD_PATH = '/card/:id';

export const mainLayoutRoutes: MainLayoutRoutes = {
  Layout: MainLayout,
  routes: [
    { path: HOME_PATH, Component: Home },
    { path: IMAGES_PAGE_PATH, Component: ImagePage },
    {path: VIDEOS_PAGE_PATH, Component: VideosPage},
    { path: CARD_PATH, Component: Card}
  ]
}

export const LOGIN_PATH = '/';
export const REGISTER_PATH = '/register'

export const authLayoutRoutes: AuthLayoutRoutes = {
  Layout: AuthLayout,
  routes: [
    { path: LOGIN_PATH, Component: Login },
    { path: REGISTER_PATH, Component: Register}
  ]
}
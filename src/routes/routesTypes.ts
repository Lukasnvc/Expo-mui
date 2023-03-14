import { PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/:id" | "/examples";
  Component: () => JSX.Element;
};

type AuthRoute = {
  path: "/";
  Component: () => JSX.Element;
};

export type MainLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: MainRoute[];
};

export type AuthLayoutRoutes = {
  Layout: (children: PropsWithChildren) => JSX.Element;
  routes: AuthRoute[];
};
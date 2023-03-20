import { PropsWithChildren } from "react";

type MainRoute = {
  path: "/" | "/:id" | "/examples" | '/card/:id' | '/images' | '/videos';
  Component: () => JSX.Element;
};

type AuthRoute = {
  path: "/" | "/register";
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
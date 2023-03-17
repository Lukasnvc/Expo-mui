import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { authLayoutRoutes, mainLayoutRoutes } from "./const";

import { ShowContext } from "../contexts/ShowContext";
import { useContext } from "react";

const AllRoutes = () => {
  const { isLoggedIn } = useContext(ShowContext);
  const { Layout, routes } = isLoggedIn ? mainLayoutRoutes : authLayoutRoutes;
  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default AllRoutes;

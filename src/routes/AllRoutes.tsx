import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";
import { authLayoutRoutes, mainLayoutRoutes } from "./const";

import { ShowContext } from "../contexts/ShowContext";
import { useContext } from "react";

const AllRoutes = () => {
  const { isLoggedIn} = useContext(ShowContext)
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
      <Route
        path="*"
        element={
          <Layout>
            <Navigate to={{ pathname: "/" }} />
          </Layout>
        }
      />
    </RoutesWrapper>
  );
};

export default AllRoutes;
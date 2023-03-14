import { Navigate, Route, Routes as RoutesWrapper } from "react-router-dom";

import { mainLayoutRoutes } from "./const";

const AllRoutes = () => {
  const { Layout, routes } = mainLayoutRoutes
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
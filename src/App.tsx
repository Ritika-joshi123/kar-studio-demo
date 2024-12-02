import { ToastContainer } from 'react-toastify';

import { Layout } from './Components';
import { OverlayLoader, useAuthentication } from './Shared';
import { AppRoute, routes } from './Routes';
import { ReactNode, Suspense, useCallback } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { isAuthenticated } = useAuthentication();

  const renderRouteComponent = useCallback(
    (route: AppRoute): ReactNode => {
      if (isAuthenticated && route.skipIfAuthenticated) {
        return <Navigate to="/" />;
      }

      if (!isAuthenticated && route.isPrivate) {
        return <Navigate to="/login" />;
      }

      if (route.isLazyRoute && route.LazyComponent) {
        return <route.LazyComponent />;
      }

      return route.Component;
    },
    [isAuthenticated]
  );

  return (
    <Layout>
      <Suspense fallback={<OverlayLoader />}>
        <ToastContainer />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.key}
              path={route.path}
              element={renderRouteComponent(route)}
            />
          ))}
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;

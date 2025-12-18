import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UrlProvider from "./context";

import AppLayout from "./layouts/app-layout";
import RequireAuth from "./components/require-auth";

import RedirectLink from "./pages/redirect-link";
import LandingPage from "./pages/landing";
import Dashboard from "./pages/dashboard";
import LinkPage from "./pages/link";
import Auth from "./pages/auth";
import NotFound from "./pages/not-found";
import { ThemeProvider } from "./context/theme-context";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "r/:id",
        element: <RedirectLink />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <UrlProvider>
        <RouterProvider router={router} />
      </UrlProvider>
    </ThemeProvider>
  );
}

export default App;

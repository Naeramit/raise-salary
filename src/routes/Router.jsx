import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RedirectIfAuthenticated from "../features/auth/components/RedirectIfAuthenticated";
// import ProtectedRoute from '../features/auth/components/ProtectedRoute';
import Container from "../layout/Container";
import LoginPage from "../page/LoginPage";
import HrPage from "../page/HrPage";
import MgPage from "../page/MgPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RedirectIfAuthenticated>
        <LoginPage />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/hr",
    element: (
      // <ProtectedRoute>
      <Container />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/hr/",
        element: <HrPage />,
      },
    ],
  },
  {
    path: "/mg",
    element: (
      // <ProtectedRoute>
      <Container />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/mg/",
        element: <MgPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

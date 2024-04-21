import { AuthLayout, DashboardLayout } from "./layouts";
import {
  AdminBookRentPage,
  LoginPage,
  RegisterPage,
  SupervisorBookRentPage,
} from "./pages";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  //   #region Auth
  {
    errorElement: <h1>Page Not Found</h1>,
    children: [
      {
        path: "/auth",
        element: <AuthLayout />,

        children: [
          {
            path: "register",
            element: <RegisterPage />,
          },
          {
            path: "login",
            element: <LoginPage />,
          },
        ],
      },
      {
        element: <DashboardLayout />,
        children: [
          //   #region Admin
          {
            path: "/admin/rents",
            element: <AdminBookRentPage />,
          },

          //   #region Supervisor
          {
            path: "/supervisor/rents",
            element: <SupervisorBookRentPage />,
          },
        ],
      },
    ],
  },
]);

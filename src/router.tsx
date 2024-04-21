import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  //   #region Auth
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
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
]);

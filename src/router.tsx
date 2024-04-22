import AdminRentContent from "./components/feature/admin/AdminRentContent";
import AdminRentCreate from "./components/feature/admin/AdminRentCreate";
import { AuthLayout, DashboardLayout } from "./layouts";
import { LoginPage, RegisterPage, SupervisorBookRentPage } from "./pages";
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
            element: <AdminRentContent />,
          },
          {
            path: "/admin/rents/create",
            element: <AdminRentCreate />,
          },
          {
            path: "/admin/vehicles",
            element: <h1>Vehicles</h1>,
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

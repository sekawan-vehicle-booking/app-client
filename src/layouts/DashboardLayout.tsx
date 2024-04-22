import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/feature/admin/AdminSidebar";

export default function DashboardLayout() {
  return (
    <>
      <div className="h-screen flex">
        <AdminSidebar />
        <div className="bg-slate-200 w-full -ms-3 p-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/auth") {
      navigate("register");
    }
  });

  return (
    <>
      <div className="h-screen bg-gray-300 flex justify-center items-center p-5">
        <div className="bg-white rounded-md shadow-md p-8 md:w-2/3">
          <Outlet />
        </div>
      </div>
    </>
  );
}

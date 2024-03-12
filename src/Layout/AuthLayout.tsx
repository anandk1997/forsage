import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") navigate("/home");
  }, [pathname, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

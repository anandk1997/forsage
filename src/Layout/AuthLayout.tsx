import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useLayoutEffect(() => navigate("/login"), []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

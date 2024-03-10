import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AuthLayout = () => {
  const navigate = useNavigate();

  useEffect(() => navigate("/login"), []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

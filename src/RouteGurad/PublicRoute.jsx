import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PublicRoute = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  return <div>{token && <Outlet />}</div>;
};

export default PublicRoute;

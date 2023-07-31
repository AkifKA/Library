import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = sessionStorage.getItem("currentUser");
  const password = sessionStorage.getItem("currentPassword");

  return user && password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;

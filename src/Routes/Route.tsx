import React from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
  priv: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, priv }) => {
  const userData = localStorage.getItem("@Project:email");

  if (!!userData === priv) {
    return <>{children}</>;
  } else {
    return (
      <Navigate
        to={{
          pathname: priv ? "/login" : "/",
        }}
      />
    );
  }
};

export default ProtectedRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if the user is authenticated (e.g., by checking if a JWT token is present)
  const isAuthenticated = localStorage.getItem("token");

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/chatscreen" />
  );
};

export default ProtectedRoute;

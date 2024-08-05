import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Mock authentication function
const isAuthenticated = () => {
  // Replace with your actual authentication logic
  return !!sessionStorage.getItem('authToken');
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/auth/login" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
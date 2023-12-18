import React, { useEffect } from "react";
import useAuthorize from "../feature/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function ProtectedRow({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, isAuthroized } = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if (!isAuthroized && !isLoading) navigate("/not-access",{replace:true});
  }, [isAuthenticated, isAuthroized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen bg-secondary-600">
        <Loading />
      </div>
    );
if(isAuthenticated && isAuthroized) return children;
}

export default ProtectedRow;

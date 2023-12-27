import React, { useEffect } from "react";
import useAuthorize from "../feature/authentication/useAuthorize";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRow({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, isAuthroized ,isActive} = useAuthorize();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/auth");
    if(!isActive && !isLoading) {
      toast.error("پروفایل شما هنوز تایید نشده است")
      navigate("/");
    }
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

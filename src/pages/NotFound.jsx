import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useHomeBack";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className="h-screen bg-secondary-0">
      <div className="sm:max-w-sm flex justify-center items-center pt-10">
        <div>
          <h1 className="text-xl font-bold text-secondary-500">
            صفحه که دنبالش بودید پیدا نشد
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-2">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
